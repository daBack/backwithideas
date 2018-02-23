var React = require('react');
var PropTypes = require('prop-types');
var Layout = require('./layout');
import Gallery from 'react-photo-gallery';
import Images from './images';

class GalleryT extends React.Component {
    render() {
        return (
            <Layout title={this.props.title}>
                <div className='images-wrapper'>
                    {/* <Gallery margin='0' photos={Images.data} /> */}
                    <img className='image-self' src='https://0sra8w.ch.files.1drv.com/y4m4UkVFD7JxvFFPy0ccZ4H9nkki6z6DWuZozV9nSYmIZUgJCRMzDoZoczyQ_0-vlhALEFcuLb_tqdR3xitx_Fapor0321ykwn1Ozyw97qREXiIaTNx9C54rPIdH252Cbm2NI9s6d0jCwDombbfwO7HIEctjDQj_JlcTGZ1pbFPq8SMLq8_70b9hd2buGTwn04OJs6L72jfOVUZX-XReXiPFw?width=256&height=171&cropmode=none'/>
                    <img className='image-self' src='https://zvj6dq.ch.files.1drv.com/y4muHMAQS8AJRudThVOoR8_5Capqht5XV6qS_1sHmBHcqdUERy5Tim61IFTzzkMg2zvqyBWBsYjdyIv4Pl2PCNeByZRKiN90phrXWduJyTzRbmjVKeIZUs9ZWOll1gTuwwfPdBXWROs96agijyoVyzrltsP-GlbMfEXTAoHThgUlg67b7lU_GZnW0t9mmr7ldwPz_nHmufsPo-jR29gxlb8nQ?width=660&height=416&cropmode=none'/>
                    <img className='image-self' src='https://0sra8w.ch.files.1drv.com/y4m4UkVFD7JxvFFPy0ccZ4H9nkki6z6DWuZozV9nSYmIZUgJCRMzDoZoczyQ_0-vlhALEFcuLb_tqdR3xitx_Fapor0321ykwn1Ozyw97qREXiIaTNx9C54rPIdH252Cbm2NI9s6d0jCwDombbfwO7HIEctjDQj_JlcTGZ1pbFPq8SMLq8_70b9hd2buGTwn04OJs6L72jfOVUZX-XReXiPFw?width=256&height=171&cropmode=none'/>
                    <img className='image-self' src='https://zvj6dq.ch.files.1drv.com/y4muHMAQS8AJRudThVOoR8_5Capqht5XV6qS_1sHmBHcqdUERy5Tim61IFTzzkMg2zvqyBWBsYjdyIv4Pl2PCNeByZRKiN90phrXWduJyTzRbmjVKeIZUs9ZWOll1gTuwwfPdBXWROs96agijyoVyzrltsP-GlbMfEXTAoHThgUlg67b7lU_GZnW0t9mmr7ldwPz_nHmufsPo-jR29gxlb8nQ?width=660&height=416&cropmode=none'/>
                    <img className='image-self' src='https://0sra8w.ch.files.1drv.com/y4m4UkVFD7JxvFFPy0ccZ4H9nkki6z6DWuZozV9nSYmIZUgJCRMzDoZoczyQ_0-vlhALEFcuLb_tqdR3xitx_Fapor0321ykwn1Ozyw97qREXiIaTNx9C54rPIdH252Cbm2NI9s6d0jCwDombbfwO7HIEctjDQj_JlcTGZ1pbFPq8SMLq8_70b9hd2buGTwn04OJs6L72jfOVUZX-XReXiPFw?width=256&height=171&cropmode=none'/>
                    <img className='image-self' src='https://zvj6dq.ch.files.1drv.com/y4muHMAQS8AJRudThVOoR8_5Capqht5XV6qS_1sHmBHcqdUERy5Tim61IFTzzkMg2zvqyBWBsYjdyIv4Pl2PCNeByZRKiN90phrXWduJyTzRbmjVKeIZUs9ZWOll1gTuwwfPdBXWROs96agijyoVyzrltsP-GlbMfEXTAoHThgUlg67b7lU_GZnW0t9mmr7ldwPz_nHmufsPo-jR29gxlb8nQ?width=660&height=416&cropmode=none'/>
                    <img className='image-self' src='https://0sra8w.ch.files.1drv.com/y4m4UkVFD7JxvFFPy0ccZ4H9nkki6z6DWuZozV9nSYmIZUgJCRMzDoZoczyQ_0-vlhALEFcuLb_tqdR3xitx_Fapor0321ykwn1Ozyw97qREXiIaTNx9C54rPIdH252Cbm2NI9s6d0jCwDombbfwO7HIEctjDQj_JlcTGZ1pbFPq8SMLq8_70b9hd2buGTwn04OJs6L72jfOVUZX-XReXiPFw?width=256&height=171&cropmode=none'/>
                    <img className='image-self' src='https://zvj6dq.ch.files.1drv.com/y4muHMAQS8AJRudThVOoR8_5Capqht5XV6qS_1sHmBHcqdUERy5Tim61IFTzzkMg2zvqyBWBsYjdyIv4Pl2PCNeByZRKiN90phrXWduJyTzRbmjVKeIZUs9ZWOll1gTuwwfPdBXWROs96agijyoVyzrltsP-GlbMfEXTAoHThgUlg67b7lU_GZnW0t9mmr7ldwPz_nHmufsPo-jR29gxlb8nQ?width=660&height=416&cropmode=none'/>
                
                </div>
            </Layout>
        );
    }
}

GalleryT.propTypes = {
  title: PropTypes.string,
};

module.exports = GalleryT;
