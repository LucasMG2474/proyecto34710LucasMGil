const productos = [
  {
    id: 1,
    nombre: "Disco Rigido",
    precio: 7000,
    foto: "https://res.cloudinary.com/lg-tech/image/upload/v1660047749/compuTech/hd_zneaqt.png",
  },
  {
    id: 2,
    nombre: "Monitor",
    precio: 48000,
    foto: "https://res.cloudinary.com/lg-tech/image/upload/v1660047749/compuTech/moni_bfexkq.png",
  },
  {
    id: 3,
    nombre: "Placa Madre",
    precio: 39000,
    foto: "https://res.cloudinary.com/lg-tech/image/upload/v1660047749/compuTech/asus_elmfww.png",
  },
  {
    id: 4,
    nombre: "Mouse",
    precio: 3806,
    foto: "https://res.cloudinary.com/lg-tech/image/upload/v1660047749/compuTech/mouse_qovard.png",
  },
  {
    id: 5,
    nombre: "Memoria Ram",
    precio: 13784,
    foto: "https://res.cloudinary.com/lg-tech/image/upload/v1660047748/compuTech/ram_kd5ur9.jpg",
  },
];

export const getItems = new Promise((resolve, reject) => {
  const condicion = true;
  if (condicion) {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  } else {
    setTimeout(() => {
      reject("404 not Found");
    }, 2000);
  }
});

export default getItems;
