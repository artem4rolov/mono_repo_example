import path from 'path';
import webpack from 'webpack';
import {BuildMode, BuildPlatform, BuildPaths, buildWebpack} from '@packages/build-config'
import packageJson from './package.json'


interface EnvVariables {
    mode?: BuildMode;
    analyzer?: boolean;
    port?: number;
    platform?: BuildPlatform;
}

export default (env: EnvVariables) => {
    const paths: BuildPaths = {
        output: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        public: path.resolve(__dirname, 'public'),
        src: path.resolve(__dirname, 'src'),
    }

    const config: webpack.Configuration = buildWebpack({
        port: env.port ?? 3001,
        mode: env.mode ?? 'development',
        paths,
        analyzer: env.analyzer,
        platform: env.platform ?? 'desktop'
    })

    config.plugins.push(new webpack.container.ModuleFederationPlugin({
        name: 'shop', // название микрофронта
        filename: 'remoteEntry.js', // название файла, который будет отдавать этот микрофронт для подключения в entry-point
        exposes: {
            // './App': path.resolve(paths.src, 'components', 'App', 'Router.tsx')
            './Router': './src/router/Router.tsx' // конкретный функционал, который мы вставляем в файл remoteEntry.js
        },
        shared: { // какие либы общие, и какие библиотеки должны шариться между микрофронтами
            // хорошей практикой является вынос подобных конфигов в отдельный shared-модуль для шаринга между микрофронтами
            ...packageJson.dependencies,
            react: {
                eager: true, // флаг, который говорит, что эту либу нужно подгрузить сразу (противоположность lazy-loading)
                // requiredVersion: packageJson.dependencies['react'] // конкретная версия либы
            },
            "react-router-dom": {
                eager: true,
                // requiredVersion: packageJson.dependencies['react-router-dom']
            },
            "react-dom": {
                eager: true,
                // requiredVersion: packageJson.dependencies['react-dom']
            },
        }
    }))

    return config;
}

