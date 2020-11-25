// import React, {Component} from 'react';
// import {connect} from 'react-redux'
// import {bindActionCreators} from 'redux'
// import {
// 	Row,
// 	Col,
// 	List,
// 	Card,
// 	Avatar,
// 	Icon,
// 	Breadcrumb,
// 	Divider,
// 	Badge,
// 	Carousel,
// 	PageHeader,
// 	Skeleton,
// 	Empty, Popover, Button
// } from "antd"

// import * as albumActions from '../../store/albums/actions'
// import * as albumSelectors from '../../store/albums/selectors'
// import * as photoActions from '../../store/photos/actions'
// import * as photoSelectors from '../../store/photos/selectors'
// import {withRouter} from "react-router-dom";

// const content = (url) => {
// 	return (
// 		<div>
// 			<img src={url} />
// 		</div>
// 	);

// };

// class Gallery extends Component {
// 	state = {
// 		reqParams: {
// 			userId: 1
// 		}
// 	};

// 	componentDidMount() {
// 		const {reqParams} = this.state;

// 		this.props.albumActions.albumsRequest(reqParams);
// 	}

// 	onSelectAlbum = (id) => {
// 		this.props.photoActions.photosRequest({albumId: id})
// 	};

// 	render() {

// 		const {allAlbums, allPhotos} = this.props;
// 		return (
// 			<React.Fragment>
// 				<PageHeader
// 					style={{margin: '16px 0'}}
// 					title="Gallery"
// 					subTitle="Get a chance to reminisce on some of your photos and albums"
// 				/>
// 				<div style={{background: '#fff', padding: 24, minHeight: 280}}>
// 					<Row>
// 						<Col span={17} push={7}>
// 							<h3>Photos</h3>


// 							{
// 								allPhotos.data.length > 0 ? (
// 									<List
// 										grid={{
// 											gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 6,
// 										}}
// 										dataSource={allPhotos.data}
// 										pagination={allPhotos.pagination}
// 										renderItem={item => (
// 											<Skeleton loading={allPhotos.tracker.status === "processing"} active>
// 												<List.Item>
// 													<Popover content={content(item.url)} title={item.title}>
// 														<Card
// 															cover={<img alt="example" src={item.thumbnailUrl}/>}
// 															title={item.title}>
// 														</Card>
// 													</Popover>
// 												</List.Item>
// 											</Skeleton>
// 										)}
// 									/>
// 								) : <Empty description={"Select Album to view photos"}/>
// 							}




// 						</Col>
// 						<Col span={6} pull={17} style={{paddingRight: 20}}>
// 							<h3>List of Albums</h3>
// 							<Skeleton loading={allAlbums.tracker.status === "processing"}>
// 								<List
// 									size="small"
// 									dataSource={allAlbums.data}
// 									renderItem={item => (
// 										<a onClick={() => this.onSelectAlbum(item.id)}>
// 											<List.Item>
// 												{item.title}
// 											</List.Item>
// 										</a>)}
// 								/>
// 							</Skeleton>
// 						</Col>
// 					</Row>
// 				</div>
// 			</React.Fragment>

// 		);
// 	}
// }

// const mapStateToProps = state => {
// 	return {
// 		allAlbums: albumSelectors.getAlbums(state),
// 		allPhotos: photoSelectors.getPhotos(state),
// 	}
// };

// const mapDispatchToProps = dispatch => {
// 	return {
// 		albumActions: bindActionCreators(albumActions, dispatch),
// 		photoActions: bindActionCreators(photoActions, dispatch),
// 	}
// };

// export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Gallery));

import React from 'react';
import {PageHeader,Row,Col } from "antd";
import {PieChart, Pie, Legend, Tooltip } from 'recharts';
import {useSelector,useDispatch} from 'react-redux';
import * as postActions from '../../store/posts/actions';

  const Gallery=()=>{
	const dispatch=useDispatch();
	const counter = useSelector(state => state.postsReducer.collection);
	React.useEffect(() => {dispatch(postActions.fetchPost())},[]);
    const[data1,setData]=React.useState([]);
	 
	React.useEffect(()=>{
    if(counter.length!=0){
		const activeIndicatorTrue=  counter.filter((e)=>{
			if(e.activeIndicator===true)
			return e;
		});
		const activeIndicatorFalse=  counter.filter((e)=>{
			if(e.activeIndicator===false)
			return e;
		});
		const filteredData=[];
	  filteredData.push({name:"Active Indicator True",value:activeIndicatorTrue.length},
		{name:"Active Indicator False",value:activeIndicatorFalse.length});
	   setData(filteredData)
	}
	},[counter]);
	return(
		<div>
			{console.log("data value",data1)}
			<PageHeader
				style={{margin: '16px 0'}}
					title="Analytics"
 					subTitle="Get a chance to see your Analytics"
				/>
				<Row justify="center">
					<Col span={24}>
				<PieChart width={400} height={400}>
                <Pie dataKey="value" isAnimationActive={false} data={data1} cx={200} cy={200} outerRadius={80} fill="#8884d8" label />
                <Tooltip />
              </PieChart>
			  </Col>
				</Row>
		</div>
	)
}
export default Gallery;