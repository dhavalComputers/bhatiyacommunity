import React, { lazy, useState, useEffect } from "react";
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CCallout,
} from "@coreui/react";
import temp from "../../assets/images/gallery/1.jpg";
import CIcon from "@coreui/icons-react";
import { PhotosGallery } from "../../componets/Data";
import { Link } from "react-router-dom";
import DztImageGalleryComponent from "reactjs-image-gallery";


// import MainChartExample from "../charts/MainChartExample.js";

// const WidgetsDropdown = lazy(() => import("../widgets/WidgetsDropdown.js"));
// const WidgetsBrand = lazy(() => import("../widgets/WidgetsBrand.js"));




const PhotoGallerySingle = (props) => {

  const [photoGallery, setphotoGallery] = useState({
    title: '',
    image: '',
    data: [],
    P1: '',
    P2: '',
    P3: '',
    A1: '',
    A2: '',
    A3: '',
    A4: '',
  })

  useEffect(() => {
    // console.log("props==", props.location.state.data)
    loadUser()
  }, [])

  const loadUser = async () => {
    // const res = await axios.get(`https://localhost:3001/mobileApps/${id}`);
    setphotoGallery(props.location.state.data)
  }


  return (
    <>
      <CCard className="gallerySingle">
        <CCardBody>
          <CRow>
            <CCol lg="12">
              <h4 id="traffic" className="card-title mb-0">
                Photo Gallery - {photoGallery.title}
              </h4>
              {/* <div className="small text-muted">November 2017</div> */}
            </CCol>
          </CRow>
        </CCardBody>
        <CCardFooter>
          <CRow className="text-center">

            {console.log("photoGallery.data_", photoGallery.data)}
            {/* {PhotosGallery.map((PhotoGallery, index) => (

              // <img src={PhotoGallery.image} alt="" />
              // <h1>sdf</h1>
              <DztImageGalleryComponent images={PhotoGallery.data} /> 

             ))}  */}
                           <DztImageGalleryComponent images={photoGallery.data} /> 

          </CRow>
        </CCardFooter>
      </CCard>
    </>
  );
};

export default PhotoGallerySingle;
