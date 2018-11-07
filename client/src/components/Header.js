import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
	<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
		<a className="navbar-brand" href="/">
			Products CRUD
		</a>
		<div>
			<ul className="navbar-nav mr-auto">
				<li className="nav-item">
					<Link className="nav-link" to={'/products'}>
						View Products
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to={'/products/create'}>
						Create Product
					</Link>
				</li>
			</ul>
		</div>
	</nav>
);

export default Header;
