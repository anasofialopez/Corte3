import React from 'react'
import { useParams, useSearchParams, useNavigate} from 'react-router-dom'

export const ProductsPage = () => {
    const { id } = useParams()
    const [params] = useSearchParams()

    const navigate = useNavigate()

    const onLogout = () => {
        navigate('/Login', {
            replace: true
        })
    }
  return (
    <div>Products Page {id} { params.get('sort') }
        <button onClick={() => onLogout()}>Log out</button>
    </div>
  )
}
