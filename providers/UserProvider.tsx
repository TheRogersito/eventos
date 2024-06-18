import { createContext, useState, useContext } from 'react';

const AppContext = createContext([undefined, () => { }])
export const useUserContext = () => useContext(AppContext);

const UserProvider = ({ children }: { children: any }) => {
    const [user, setUser] = useState();
    return (
        <AppContext.Provider value={[user, setUser]}>
            {children}
        </AppContext.Provider>
    );
}

export default UserProvider;