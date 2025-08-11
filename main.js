// 모바일 터치 시 카드 이미지에 호버 효과 적용
document.addEventListener('DOMContentLoaded', function() {
	var imgs = document.querySelectorAll('.card-img-top');
	imgs.forEach(function(img) {
		img.addEventListener('touchstart', function() {
			img.classList.add('img-hover');
			setTimeout(function() {
				img.classList.remove('img-hover');
			}, 500);
		});
	});
});
// 카드 데이터 예시 (최신 정보와 이미지)
const cards = [
	{
		title: '최신 뉴스',
		desc: '2025년 8월 11일, AI 기술이 일상에 더 깊이 들어오고 있습니다.',
		img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
		link: 'https://news.naver.com/'
	},
	{
		title: '기술 트렌드',
		desc: '양자 컴퓨팅과 클라우드가 IT 업계를 선도하고 있습니다.',
		img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
		link: 'https://www.techm.kr/'
	},
	{
		title: '스포츠 소식',
		desc: '2025년 파리 올림픽이 성황리에 개최 중입니다.',
		img: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=400&q=80',
		link: 'https://sports.news.naver.com/'
	},
	{
		title: '엔터테인먼트',
		desc: 'K-POP이 전 세계 차트를 휩쓸고 있습니다.',
		img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80',
		link: 'https://entertain.naver.com/'
	}
];

const container = document.getElementById('card-container');
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.gap = '20px';
container.style.justifyContent = 'center';

cards.forEach(card => {
	const cardDiv = document.createElement('div');
	cardDiv.style.width = '260px';
	cardDiv.style.border = '1px solid #ddd';
	cardDiv.style.borderRadius = '12px';
	cardDiv.style.overflow = 'hidden';
	cardDiv.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
	cardDiv.style.background = '#fff';
	cardDiv.style.display = 'flex';
	cardDiv.style.flexDirection = 'column';
	cardDiv.style.alignItems = 'center';
	cardDiv.style.padding = '0 0 16px 0';

	const img = document.createElement('img');
	img.src = card.img;
	img.alt = card.title;
	img.style.width = '100%';
	img.style.height = '160px';
	img.style.objectFit = 'cover';

	const title = document.createElement('h3');
	title.textContent = card.title;
	title.style.margin = '16px 0 8px 0';
	title.style.fontSize = '1.2rem';

	const desc = document.createElement('p');
	desc.textContent = card.desc;
	desc.style.fontSize = '1rem';
	desc.style.margin = '0 12px 12px 12px';
	desc.style.textAlign = 'center';

	const link = document.createElement('a');
	link.href = card.link;
	link.textContent = '자세히 보기';
	link.target = '_blank';
	link.style.marginTop = 'auto';
	link.style.color = '#712cf9';
	link.style.fontWeight = 'bold';
	link.style.textDecoration = 'none';

	cardDiv.appendChild(img);
	cardDiv.appendChild(title);
	cardDiv.appendChild(desc);
	cardDiv.appendChild(link);
	container.appendChild(cardDiv);
});
