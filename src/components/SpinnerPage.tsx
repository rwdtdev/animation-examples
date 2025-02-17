import { Spinner } from './Spinner';

export function SpinnerPage() {
  return (
    <>
      <h1>Spinner</h1>
      <div className='h-12 w-12 border border-red-600 p-3'>
        <Spinner />
      </div>
      <p>
        Помимо компонента требуется расширить настройки tailwind в файлу
        tailwind.config.js:
        <pre>
          {`animation: {
spinner: 'spinner 1.25s linear infinite',
},
keyframes: {
  spinner: {
    '0%': { opacity: '1' },
    '10%': { opacity: '0.7' },
    '20%': { opacity: '0.5' },
    '35%': { opacity: '0.3' },
    '50%': { opacity: '0.2' },
    '75%': { opacity: '0.1' },
    '100%': { opacity: '0' },
    },
    },`}
        </pre>
      </p>
    </>
  );
}
