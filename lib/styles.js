import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    viewContent:{
        backgroundColor:'#fff',
        width: '100%',
        height:'auto',
        position:'absolute',
        bottom:0
    },
    row:{
        flexDirection:'row',
        paddingHorizontal:20,
        paddingTop:20,
        alignItems:'center',
        marginBottom:5
    },
    itemTitle:{
        color:'#6C7A89',
        fontSize:16,
        fontWeight:'600'
    },
    itemTitleRed:{
        color:'#F03434',
        fontSize:16,
        fontWeight:'600'
    },
    itemDescription:{
        color:'#BDC3C7',
        fontSize:11,
        marginTop:2
    }
})