import React from 'react'

type Props = {
  username?: string
}

export const UserCard = (props: Props) => {
  return (
    <>
      <div>username: {props.username ?? 'user name'}</div>
      <div>password: {'123'}</div>
    </>
  )
}
