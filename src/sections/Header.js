import React from 'react'
import Social from '../components/Social'
import Icon from '../components/Icon'

const Header = () => {
	const [active, setActive] = React.useState(false)
	const toggleActive = () => setActive(value => !value)

	return (
		<div>
			<header className='wrap'>
				<h3 className='name'>brrian</h3>
				<Social />
				<a href='#' className='icon icon-menu' onClick={toggleActive}>
					<Icon name='ri-menu-line' />
				</a>
			</header>

			<nav className={active ? 'wrap active' : 'wrap'}>
				<Social />
			</nav>
		</div>
	)
}

export default Header