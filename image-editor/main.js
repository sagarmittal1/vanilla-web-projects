const fileInput = document.querySelector('#imageFileInput');
const canvas = document.querySelector('#canvas');
const canvasCtx = canvas.getContext('2d');
const brightnessInput = document.querySelector('#brightness');
const saturationInput = document.querySelector('#saturation');
const blurInput = document.querySelector('#blur');
const inversionInput = document.querySelector('#inversion');
const rangeSliders = document.querySelectorAll('[type="range"]');


const settings = {};
let image = null;

// rangeSliders.forEach(slider => slider.rangeslider());

function resetSettings() {
  settings.brightness = '100';
  settings.saturation = '100';
  settings.blur = '0';
  settings.inversion = '0';

  brightnessInput.value = settings.brightness;
  saturationInput.value = settings.saturation;
  blurInput.value = settings.blur;
  inversionInput.value = settings.inversion;
}

function updateSetting(key, value) {
  if (!image) return;

  settings[key] = value;
  renderImage();
}

function renderImage() {
  canvas.width = image.width;
  canvas.height = image.height;

  canvasCtx.filter = generateFilter();
  canvasCtx.drawImage(image, 0, 0);
}

function generateFilter() {
  const { brightness, saturation, blur, inversion } = settings;

  return `brightness(${brightness}%) saturate(${saturation}%) blur(${blur}px) invert(${inversion}%)`;
}


brightnessInput.addEventListener('change', () =>
  updateSetting('brightness', brightnessInput.value)
);
saturationInput.addEventListener('change', () =>
  updateSetting('saturation', saturationInput.value)
);
blurInput.addEventListener('change', () =>
  updateSetting('blur', blurInput.value)
);
inversionInput.addEventListener('change', () =>
  updateSetting('inversion', inversionInput.value)
);

fileInput.addEventListener('change', () => {
  image = new Image();

  image.addEventListener('load', () => {
    resetSettings();
    renderImage();
  })

  image.src = URL.createObjectURL(fileInput.files[0]);
})

resetSettings();

// made using https://www.youtube.com/watch?v=e_QGePW-GBw
