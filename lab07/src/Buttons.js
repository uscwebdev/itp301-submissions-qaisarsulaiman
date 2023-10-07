import React from 'react';
import { useState } from 'react';

export default function Header() {
  const [src, setSrc] = useState(
    'https://www.investopedia.com/thmb/t9ptoLnvjFl1qlVWhXIrnL17LGA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1205198865-48d9cf94a766422796067c893ef272e8.jpg'
  );
  const [alt, setAlt] = useState('Kanye West');

  function handleImage(newSrc, newAlt) {
    setSrc(newSrc);
    setAlt(newAlt);
  }

  return (
    <div className="container pt-4">
      <div className="row">
        <h3 className="col-12 mb-4">Select an image to preview:</h3>
      </div>
      <div className="row">
        <button
          className="btn btn-dark col mx-2 my-2 small"
          onClick={() => {
            handleImage(
              'https://images.genius.com/05033c92156c1d3f9cc521ce500cf6cc.1000x1000x1.jpg',
              'The College Dropout'
            );
          }}
        >
          The College Dropout
        </button>
        <button
          className="btn btn-dark col mx-2 my-2 small"
          onClick={() => {
            handleImage(
              'https://t2.genius.com/unsafe/904x0/https%3A%2F%2Fimages.genius.com%2F1114c010127bf9660a598f5e2dce983e.992x992x1.png',
              'Late Registration'
            );
          }}
        >
          Late Registration
        </button>
        <button
          className="btn btn-dark col mx-2 my-2 small"
          onClick={() => {
            handleImage(
              'https://t2.genius.com/unsafe/904x0/https%3A%2F%2Fimages.genius.com%2Fb9d6cf24ceb76fa5d8ebf02569e16e2f.1000x1000x1.png',
              'Graduation'
            );
          }}
        >
          Graduation
        </button>
        <button
          className="btn btn-dark col mx-2 my-2 small"
          onClick={() => {
            handleImage(
              'https://t2.genius.com/unsafe/904x0/https%3A%2F%2Fimages.genius.com%2Fa769512d2736d6039c4592f688f1193e.1000x1000x1.jpg',
              '808s & Heartbreak'
            );
          }}
        >
          808s & Heartbreak
        </button>
      </div>
      <div className="row">
        <button
          className="btn btn-dark col mx-2 my-2 small"
          onClick={() => {
            handleImage(
              'https://t2.genius.com/unsafe/904x0/https%3A%2F%2Fimages.genius.com%2F97300f5421ff3c645217d0d1dfef2dd6.1000x1000x1.jpg',
              'My Beautiful Dark Twisted Fantasy'
            );
          }}
        >
          My Beautiful Dark Twisted Fantasy
        </button>
        <button
          className="btn btn-dark col mx-2 my-2 small"
          onClick={() => {
            handleImage(
              'https://t2.genius.com/unsafe/904x0/https%3A%2F%2Fimages.genius.com%2Ff4daff29a000bf818c5e53355c12d672.1000x1000x1.png',
              'Yeezus'
            );
          }}
        >
          Yeezus
        </button>
        <button
          className="btn btn-dark col mx-2 my-2 small"
          onClick={() => {
            handleImage(
              'https://t2.genius.com/unsafe/904x0/https%3A%2F%2Fimages.genius.com%2F777ce95cc69a4d8ef326e421e991932a.1000x1000x1.png',
              'Life of Pablo'
            );
          }}
        >
          The Life of Pablo
        </button>
      </div>
      <div className="row">
        <button
          className="btn btn-dark col mx-2 my-2 small"
          onClick={() => {
            handleImage(
              'https://t2.genius.com/unsafe/904x0/https%3A%2F%2Fimages.genius.com%2F521b925045ca5be201953c54501f3b6a.640x640x1.png',
              'Ye'
            );
          }}
        >
          Ye
        </button>
        <button
          className="btn btn-dark col mx-2 my-2 small"
          onClick={() => {
            handleImage(
              'https://t2.genius.com/unsafe/904x0/https%3A%2F%2Fimages.genius.com%2F8263f36556d2761ceafe7df17cd0d74a.1000x1000x1.png',
              'Jesus is King'
            );
          }}
        >
          Jesus is King
        </button>
        <button
          className="btn btn-dark col mx-2 my-2 small"
          onClick={() => {
            handleImage(
              'https://t2.genius.com/unsafe/904x0/https%3A%2F%2Fimages.genius.com%2Fe073a37e5ffcf442900c023bf4349036.1000x1000x1.png',
              'Donda'
            );
          }}
        >
          Donda
        </button>
      </div>
      <div className="col-12 mt-4">
        <img className="img-fluid shadow-lg rounded" src={src} alt={alt} />
        <p>{alt}</p>
      </div>
    </div>
  );
}
