import React from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
	ScrollView,
	Pressable,
	Linking,SafeAreaView,StatusBar,ImageBackground
} from 'react-native';


const styles = StyleSheet.create({
	container: {
		backgroundColor: '#FFFF',
	},
	headerText: {
		flex: 1,
		paddingLeft:0,
		bottom:10,
		fontWeight: 'bold',
		fontSize: 40,
		color:'white'
	},
	header: {
		flexDirection: 'row',
		paddingHorizontal: 10,
		paddingVertical: 20,
	},
	title: {
		marginVertical: 15,
		fontWeight: 'bold',
		fontSize: 20,
	},
	content: {
		lineHeight: 22,
		fontSize: 15,
	},
	image: {
		height: 200,
	},
	newsItem: {
		marginVertical: 10,
		marginHorizontal: 15,
		paddingHorizontal: 15,
		paddingVertical: 10,
		backgroundColor: 'white',
		borderRadius: 8,
		borderColor: '#FFB085',
		borderWidth: 2,
	},

});

const articles=[
  { index:1,
    url:'http://www.commune-elalia.gov.tn/images/bt-shortcode/bt-carousel-1540843806-5bd7691e5a9c1/180x120/180x120-39169635_2097868370454265_216378858939613184_n.jpg',
    title:'الاحتفال بالعيد الوطني للمرأة 13 أوت 2018',
    description:'جانب من مداخلة السيدة اسلام الزيدان حول دور المرأة في الاسرة العصرية وعيادة طب أسنان مجانية أمنتها الدكتورة صفاء الحبيب وذلك في إطار الاحتفال بالعيد الوطني للمرأة 13 أوت 2018 بمركب الطفولة بالعالية'
  },
  {	index:2,
    url:'http://www.commune-elalia.gov.tn/images/bt-shortcode/bt-carousel-1541376576-5bdf8a40bdebc/180x120/180x120-42907668_2126731600901275_1199809752771592192_n.jpg',
    title:'حملة نظافة بتاريخ 30 سبتمبر 2018 خارج المنطقة العمرانية شملت المسالك الفلاحية',
    description:'حملة نظافة بتاريخ 30 سبتمبر 2018 خارج المنطقة العمرانية شملت المسالك الفلاحية وطريق المنطقة الصناعية ومنطقة الخيتمين وعدة نقاط سوداء ومصبات عشوائية'},
  {index:3,
    url:'http://www.commune-elalia.gov.tn/images/bt-shortcode/bt-carousel-1541375386-5bdf859a4643d/180x120/180x120-42828342_2126023874305381_6042375217118969856_n.jpg',
    title:'الجلسة الاستثنائية للمجلس البلدي المنعقدة بتاريخ 29 سبتمبر 2018 بقصر بلدية العالية',
    description:'الجلسة الاستثنائية للمجلس البلدي المنعقدة بتاريخ 29 سبتمبر 2018 بقصر بلدية العالية وقد نظر المجلس في المسائل التالية:- المصادقة على مشروع ميزانية بلدية العالية لسنة 2019.- النظر في الترخيص لمؤسستين صناعيتين للربط بالشبكات العمومية (ماء صالح للشراب وتيار كهربائي) - تنازل رئيس البلدية عن الحد الأقصى للمنح المخولة له قانونا وتحويل الفارق ببن الحد الأدنى والحد الأقصى ضمن اعتمادات ميزانية2019 للتدخلات الاجتماعية. - المصادقة على تغيير وتدعيم أعضاء عدد من اللجان البلدية القارة والغير قارة'
  },

  { index:4,
    url:'http://www.commune-elalia.gov.tn/images/bt-shortcode/bt-carousel-1547207607-5c3883b7e7cb9/180x120/180x120-49833666_1375231552619805_5060172447710445568_n.jpg',
    title:'الاتفاق على استحداث مكتب للتونسيين بالخارج بإحدى المناطق الشرقية للبلاد مارس المقبل ...',
    description:'خلال الاجتماع الذي عقد يوم الثلاثاء 08/01/2019 في بلدية العلي برئاسة السيد حمادي بن سالم رئيس المجلس البلدي وتحت إشراف محافظ الهيئة الأستاذ محمد قويدر وبحضور رئيس المجلس البلدي. مدير عام الغرفة التونسية للشؤون الخارجية السيد عبد القادر مهذبي.'
  },


]
const image = require('../assets/background.png')

const Actualities = () => {
	return (
			<SafeAreaView style={styles.container}>
				<StatusBar barStyle='dark-content' />
        <ScrollView style={styles.newsList}>
		<ImageBackground source={image} resizeMode="cover" style={{flex: 1,justifyContent: "center"  }}> 
			<View style={styles.header}>
				<Text style={styles.headerText}>الاخبار</Text>
			</View >
				{articles.map((article) => (
					<Pressable
						key={article.index}
						style={styles.newsItem}
					>
						<Image
							source={{ uri: article.url }}
							style={styles.image}
						/>
						<Text style={styles.title}>{article.title}</Text>
						<Text style={styles.content}>
							{article.description}
						</Text>
					</Pressable>
				))}
		</ImageBackground>
		</ScrollView>
	</SafeAreaView>
	);
};

export default Actualities;