import { Wrap } from '../../components/style';
import { TabWrap, TabBtn } from './board.style';
import DataTable from './DataTable';
import { usePosts } from './usePosts';

export default function Board() {
	const { data, loading } = usePosts();

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<div className='h-full pt-20'>
			<Wrap>
				<TabWrap>
					<TabBtn className='active'>공지사항</TabBtn>
					<TabBtn>자유 게시판</TabBtn>
				</TabWrap>

				{loading ? <div>Loading...</div> : <DataTable data={data} />}
			</Wrap>
		</div>
	);
}
