import React, { useEffect } from 'react';

import './AEDS1.css';

const AEDS1 = ()=> {
    return(

        <div class="container">
		<div class="row row-striped">
			<div class="col-2 text-right">
				<h1 class="display-4"><span class="badge badge-secondary">23</span></h1>
				<h2>OCT</h2>
			</div>
			<div class="col-10">
				<h3 class="text-uppercase"><strong>Primeira Avaliação</strong></h3>
				<ul class="list-inline">
				    <li class="list-inline-item"><i class="fa fa-calendar-o" aria-hidden="true"></i> Quarta - feira</li>
					<li class="list-inline-item"><i class="fa fa-clock-o" aria-hidden="true"></i> 12:30  - 18:00 PM</li>
					<li class="list-inline-item"><i class="fa fa-location-arrow" aria-hidden="true"></i> fechada</li>
				</ul>
				<p>A primeira Avaliação deve ser entregue via Sistema acadêmico digitalizada.</p>
			</div>
		</div>
		<div class="row row-striped">
			<div class="col-2 text-right">
				<h1 class="display-4"><span class="badge badge-secondary">29</span></h1>
				<h2>NOV</h2>
			</div>
			<div class="col-10">
				<h3 class="text-uppercase"><strong>Segunda Avaliação</strong></h3>
				<ul class="list-inline">
				    <li class="list-inline-item"><i class="fa fa-calendar-o" aria-hidden="true"></i> Segunda</li>
					<li class="list-inline-item"><i class="fa fa-clock-o" aria-hidden="true"></i> 13:00 - 18:00 </li>
					<li class="list-inline-item"><i class="fa fa-location-arrow" aria-hidden="true"></i> fechada</li>
				</ul>
				<p>A Segunda Avaliação deve ser entregue via Sistema acadêmico digitalizada.</p>
			</div>
		</div>


        <div class="row row-striped">
			<div class="col-2 text-right">
				<h1 class="display-4"><span class="badge badge-secondary">8</span></h1>
				<h2>NOV</h2>
			</div>
			<div class="col-10">
				<h3 class="text-uppercase"><strong>Trabalho Prático</strong></h3>
				<ul class="list-inline">
				    <li class="list-inline-item"><i class="fa fa-calendar-o" aria-hidden="true"></i> Segunda</li>
					<li class="list-inline-item"><i class="fa fa-clock-o" aria-hidden="true"></i> 13:00  </li>
					<li class="list-inline-item"><i class="fa fa-location-arrow" aria-hidden="true"></i> fechado</li>
				</ul>
				<p>O trabalho deve ser entregue apenas por um integrante da dupla via sistema acadêmico.</p>
			</div>
		</div>






	</div>
	


    );

}



export default AEDS1;
