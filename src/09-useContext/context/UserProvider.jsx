import { UserContext } from "./UserContext"

export const UserProvider = ({children}) => {

    const user = {
        id: 123,
        name: 'Adrian Felipe Ochoa H.',
        email: 'adrianfeloh1@gmail.com',
    }

  return (
    <UserContext.Provider value={{hola: 'mundo', user: user}}>
        {children}
    </UserContext.Provider>
  )
}
