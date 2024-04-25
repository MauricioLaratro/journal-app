import { ImageList, ImageListItem } from "@mui/material";

export const ImageGallery = ({ images }) => {
  return (
    <ImageList sx={{ width: '100%', height: 450 }} cols={4} rowHeight='auto'>
      {images.map((image) => (
        <ImageListItem key={image}>
          <img
            srcSet={`${image}?w=450&h=450&fit=crop&auto=format&dpr=2 2x`}
            src={`${image}?w=450&h=450&fit=crop&auto=format`}
            alt="Imagen de la nota"
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
