import React, { lazy } from "react";
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
import { PhotosGallery } from "../../componets/Data";
import { Link } from "react-router-dom";

// import MainChartExample from "../charts/MainChartExample.js";

// const WidgetsDropdown = lazy(() => import("../widgets/WidgetsDropdown.js"));
// const WidgetsBrand = lazy(() => import("../widgets/WidgetsBrand.js"));

const PhotoGallery = () => {
  return (
    <>
      <CCard className="gallery">
        <CCardBody>
          <CRow>
            <CCol sm="5">
              <h4 id="traffic" className="card-title mb-0">
                PhotoGallery
              </h4>
              {/* <div className="small text-muted">November 2017</div> */}
            </CCol>
            {/* <CCol sm="7" className="d-none d-md-block">
              <CButton color="primary" className="float-right">
                <CIcon name="cil-cloud-download" />
              </CButton>
              <CButtonGroup className="float-right mr-3">
                {["Day", "Month", "Year"].map((value) => (
                  <CButton
                    color="outline-secondary"
                    key={value}
                    className="mx-0"
                    active={value === "Month"}
                  >
                    {value}
                  </CButton>
                ))}
              </CButtonGroup>
            </CCol> */}
          </CRow>
          {/* <MainChartExample style={{ height: "300px", marginTop: "40px" }} /> */}
        </CCardBody>
        <CCardFooter>
          <CRow className="text-center">
            {PhotosGallery.map((PhotoGallery, index) => (
              <CCol xs="12" sm="6" md="4">
                <CCard color="gradient-secondary">
                  <CCardBody className="p-0">
                    <Link
                      to={{
                        pathname: `/PhotoGallerySingle/${PhotoGallery.id}`,
                        state: { data: PhotoGallery },
                      }}
                    >
                      <img src={temp} alt="" />
                    </Link>
                  </CCardBody>
                  <CCardHeader>
                    <Link
                      to={{
                        pathname: `/PhotoGallerySingle/${PhotoGallery.id}`,
                        state: { data: PhotoGallery },
                      }}
                    >
                      {PhotoGallery.title}
                    </Link>
                  </CCardHeader>
                </CCard>
              </CCol>
            ))}

            {/* <GalleryCard image={temp} title="10th anniversary of yuva committee function" />
             <GalleryCard image={temp} title="9th anniversary of yuva committee function" />
             <GalleryCard image={temp} title="8th anniversary of yuva committee function" />
             <GalleryCard image={temp} title="7th anniversary of yuva committee function" />
             <GalleryCard image={temp} title="6th anniversary of yuva committee function" />
             <GalleryCard image={temp} title="5th anniversary of yuva committee function" />
             <GalleryCard image={temp} title="4th anniversary of yuva committee function" />
             <GalleryCard image={temp} title="3th anniversary of yuva committee function" />
             <GalleryCard image={temp} title="2th anniversary of yuva committee function" />
             <GalleryCard image={temp} title="1th anniversary of yuva committee function" /> */}
          </CRow>
        </CCardFooter>
      </CCard>
    </>
  );
};

const GalleryCard = (props) => {
  const { image, title } = props;
  return (
    <CCol xs="12" sm="6" md="4">
      <CCard color="gradient-secondary">
        <CCardBody className="p-0">
          <img src={image} alt="" />
        </CCardBody>
        <CCardHeader>{title}</CCardHeader>
      </CCard>
    </CCol>
  );
};
export default PhotoGallery;
