import autoprefixer from 'autoprefixer'; // Import autoprefixer
import cssnano from 'cssnano'; // Import cssnano

export default {
  plugins: [
    autoprefixer(), // Add vendor prefixes
    cssnano({ preset: 'default' }) // Minify CSS
  ]
};