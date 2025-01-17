import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import {useLocation, useSearchParams} from 'react-router-dom';
import {useState} from 'react';
import Done from './Done';

function App(props) {
	const [searchParams, setSearchParams] = useSearchParams();
	const [pay, setPay] = useState(false);
	const {transportationId} = props.match.params;
	return (
		<div>
			{!pay && (
				<Container>
					<Img src='./old.png'></Img>
					<Title>
						<Bold>{searchParams.get('who') || '엄마'}</Bold>님이{' '}
						<Bold>{searchParams.get('detail') || '서울-부산 KTX'}</Bold> 결제를 요청하셨습니다.
					</Title>

					<p>결제 수단 선택</p>
					<Pay>
						<div>
							<form>
								<PayBox>
									<input type='radio' name='pay' id='신용카드' />
									<label for='신용카드'>신용카드</label>
								</PayBox>
								<PayBox>
									<input type='radio' name='pay' id='무통장입금' />
									<label for='무통장입금'>무통장 입금</label>
								</PayBox>

								<PayBox>
									<input type='radio' name='pay' id='계좌이체' />
									<label for='계좌이체'>계좌이체</label>
								</PayBox>
								<PayBox>
									<input type='radio' name='pay' id='네이버페이' />
									<label for='네이버페이'>네이버페이</label>
								</PayBox>
								<PayBox>
									<input type='radio' name='pay' id='카카오페이' />
									<label for='카카오페이'>카카오페이</label>
								</PayBox>
								<PayBox>
									<input type='radio' name='pay' id='토스' />
									<label for='토스'>토스</label>
								</PayBox>
								<PayBox>
									<input type='radio' name='pay' id='페이코' />
									<label for='페이코'>페이코</label>
								</PayBox>
							</form>
						</div>
					</Pay>
					<PayBtn
						onClick={async () => {
							try {
								await fetch('http://3.36.128.49/reservation/' + transportationId, {method: 'POST'});
								setPay(true);
							} catch (err) {}
						}}
					>
						결제하기
					</PayBtn>
					<PayBtn
						onClick={async () => {
							try {
								await fetch('http://3.36.128.49/reservation/' + transportationId, {
									method: 'DELETE',
								});
								setPay(true);
							} catch (err) {}
						}}
					>
						예약취소
					</PayBtn>
				</Container>
			)}
			{pay && <Done></Done>}
		</div>
	);
}

export default App;

const Img = styled.img`
	width: 150px;
	margin: 0 auto;
	display: block;
	position: relative;
	top: 50px;
`;

const Container = styled.div`
	width: 90%;
	height: 500px;
	margin-top: 60px;
	border-radius: 15px;
	background-color: #eeeeee;

	& > p {
		position: relative;
		top: 95px;
		font-weight: 700;
		left: 24px;
	}
`;

const Bold = styled.span`
	font-weight: 700;
	font-size: 20px;
`;

const PayBox = styled.div`
	display: inline-block;
	margin-right: 18px;
	margin-left: 0px;

	margin-bottom: 8px;
	& > label {
		font-size: 16px;
		padding-left: 4px;
	}
`;

const Title = styled.h1`
	position: relative;
	text-align: center;
	font-weight: 500;
	top: 55px;
	font-size: 16px;
`;

const Pay = styled.div`
	position: relative;
	top: 100px;
	width: 300px;
	height: 80px;
	padding: 16px;
	background-color: #dddddd;
	border-radius: 8px;
	word-break: break-all;
	& label {
		font-size: 16px;
	}
`;

const PayBtn = styled.button`
	position: relative;
	top: 120px;
	width: 280px;
	left: 38px;
	color: white;
	height: 40px;
	background-color: #111111;

	& a {
		color: white;
		text-decoration: none;
	}
`;
