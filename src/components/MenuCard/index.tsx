import React, { ReactNode } from 'react'
import { Card, Photo, Gap } from 'solarxui'
import { Title, Desc, Head, Price, Info } from './styled'
import { Menu } from 'types/Menu'

interface Props {
	menu: Menu
	plugins?: ReactNode
	onClick?: () => void
	hot?: boolean
	recommended?: boolean
}

const MenuCard = ({
	menu: { thumbnailUrl, name, desc, price, active = true },
	plugins,
	onClick,
	hot,
	recommended,
}: Props) => {
	return (
		<Card onClick={onClick}>
			<Gap size="18px">
				<Photo src={thumbnailUrl} alt="" size={95} variant="normal" className={!active ? 'grayscale' : ''} />
				<Info>
					<Head className={!active ? 'grayscale' : ''}>
						<Gap size="8px" type="vertical">
							<Title className="highlight">{`${name}${hot ? '🔥' : ''}${recommended ? '❤️' : ''}`}</Title>
							<Desc>{desc}</Desc>
						</Gap>
						<Price className="highlight primary-text">{`฿${price}`}</Price>
					</Head>
					{plugins}
				</Info>
			</Gap>
		</Card>
	)
}

export default MenuCard
