import {Auth} from './helper/context'
import App from './App'
import { useState } from 'react'

export default function StatesLayer () {
    const [Authed,setAuthed] = useState(false)
    return(
        <div>
            <Auth.Provider value={[Authed,setAuthed]}>
                <App/>
            </Auth.Provider>
        </div>
    )
}