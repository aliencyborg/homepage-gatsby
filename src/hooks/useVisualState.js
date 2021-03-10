import { useLocation } from '@reach/router'
import { useState } from 'react'

const useVisualState = () => {
  const [navMenuIsExpanded, setNavMenuIsExpanded] = useState(false)
  const { pathname } = useLocation()
  const isHomePage = pathname === '/'

  const toggleNavMenu = () => setNavMenuIsExpanded(!navMenuIsExpanded)

  return { isHomePage, navMenuIsExpanded, toggleNavMenu }
}

export default useVisualState
