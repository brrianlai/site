import React from 'react'
import Image from 'next/future/image'
import Tag from './Tag'
import Icon from './Icon'

const Card = ({ image, height, width, title, tags, sizes, link }) => {
	return (
		<div className='card'>
			{image ?
				<a href={link}>
					<Image
						src={image}
						height={height}
						width={width}
						alt={title}
						sizes={sizes}
						quality='90'
					/>
				</a>
			: null}
			<div className='card-content'>
				<h5>{title}</h5>
				{tags ?
					<div className='row' data-gap='smaller'>
						{tags.map((tag, index) => (
							<Tag content={tag} key={index} />
						))}
						{link ?
							<a href={link} className='card-link'>
								<Icon name='ri-link' />
							</a>
						: null}
					</div>
				: null}
			</div>
		</div>
	)
}

export default Card