// import Image from 'next/image'

interface Props {
  userInfos: any
}

export default function UserCard({ userInfos }: Props) {
  return (
    <div>
      {userInfos.map((userInfo: any, index: number) => {
        return (
          <>
            <div key={index}>name: {userInfo?.name}</div>
            <img
              src={userInfo?.picture.thumbnail}
              alt="User Picture"
              height="400"
              width="400"
              key={index}
            ></img>
          </>
        )
      })}
    </div>
  )
}
