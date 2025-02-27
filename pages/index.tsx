import { useEffect } from 'react'
import { useRouter } from 'next/router'
const Index = () => {
  const router = useRouter()
  
    useEffect(() => {
    const { REALM } = process.env
    const mainUrl = REALM ? `/dao/XGIRLS` : '/dao/XGIRLS'
    router.replace(mainUrl)
  }, [])

  return null
}

export default Index
