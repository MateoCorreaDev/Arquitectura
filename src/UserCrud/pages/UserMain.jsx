import {CardUser} from '../components/cardUser'
import {useUser} from '../hooks/userHook'

export function UserMain() {
    const user = useUser()
    return (
        <div>
            <h1>User Main</h1>
            {
                user.map((user) => {
                    return (
                        <div key={user.name}>
                            <CardUser
                                name={user.name}
                                description={user.description}
                                price={user.price}
                            />
                        </div>
                    )
                })
            }

        </div>
    )
}