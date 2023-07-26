export default function RandomUser({
  currentPage,
  setCurrentPage,
  userProfiles,
  fetchRandomUserData,
  setUserProfiles,
}) {
  const requestNewUser = () => {
    setCurrentPage(currentPage + 1)
    fetchRandomUserData(currentPage)
  }

  const removeLatestUser = () => {
    let copy = [...userProfiles]
    if (copy.length === 0) {
      return
    }
    copy.pop()
    setUserProfiles(copy)
  }

  // console.log(`inside RandomUser component: ${userProfiles[0]}`)
  return (
    <section className="align-center max-w-container">
      <div className="flex flex-col">
        {userProfiles.length > 0 ? (
          userProfiles.map((userProfile, index) => {
            return (
              <div key={index}>
                <div className="m-5 mt-10">
                  Name: {userProfile?.name?.first} {userProfile?.name?.last}
                </div>
                <img
                  className="m-5"
                  height="100"
                  width="100"
                  src={userProfile?.picture?.thumbnail}
                  alt="profile picture"
                />
              </div>
            )
          })
        ) : (
          <div className="m-5">No Users to Display!</div>
        )}
      </div>
      <button
        className="m-2 rounded-lg border-2 border-black p-2 pb-1 pt-1"
        onClick={requestNewUser}
      >
        Request New User
      </button>
      <button
        className="m-2 rounded-lg border-2 border-black p-2 pb-1 pt-1"
        onClick={removeLatestUser}
      >
        Remove Recent User
      </button>
    </section>
  )
}
