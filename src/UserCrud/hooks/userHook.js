import {getUser} from '../../API/UserApi/User'
import {useEffect, useState} from 'react'

export function useUser() {
    const [user, setUser] = useState([])
    useEffect(() => {
        getUser().then((response) => {
            setUser(response.data)
        })
    }, [])
    return user
}