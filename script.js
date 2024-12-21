document.addEventListener('DOMContentLoaded', () => {
    const counter = document.getElementById('counter1');
    let count = 0;
    const target = 2250; // Target number
    const duration = 6000; // Duration in milliseconds
    const increment = target / (duration / 100);

    function updateCounter() {
        count += increment;
        if (count < target) {
            counter.textContent = Math.floor(count);
            requestAnimationFrame(updateCounter);
        } else {
            counter.innerHTML ='<svg class="telegram" viewBox="-0.5 -0.5 20 20" fill="red" xmlns="http://www.w3.org/2000/svg" id="Youtube--Streamline-Unicons" height="20" width="20"><desc>Youtube Streamline Icon: https://streamlinehq.com</desc><path d="M18.208333333333336 7.6870675c0.039108333333333335 -1.1331441666666668 -0.20868333333333336 -2.2578175000000003 -0.7204166666666667 -3.2695833333333337 -0.347225 -0.41515 -0.8291125 -0.6953129166666667 -1.3616666666666668 -0.7916666666666667 -2.2028125000000003 -0.19987208333333337 -4.4147291666666675 -0.28179375 -6.62625 -0.2454166666666667 -2.2034933333333337 -0.03803166666666667 -4.407445833333334 0.041245833333333336 -6.602500000000001 0.23750000000000002 -0.4339758333333334 0.07894500000000002 -0.8355962500000002 0.28250625 -1.1558333333333335 0.5858333333333334 -0.7125000000000001 0.6570833333333334 -0.7916666666666667 1.7812500000000002 -0.8708333333333335 2.73125C0.7559688333333334 8.643020833333335 0.7559688333333334 10.356900000000001 0.8708333333333335 12.065000000000001c0.02290291666666667 0.5346916666666667 0.10251291666666668 1.0654250000000003 0.23750000000000002 1.5833333333333335 0.09545125 0.3997916666666667 0.2885783333333334 0.7697375000000001 0.5620833333333334 1.0766666666666669 0.3224141666666667 0.31935833333333336 0.7333841666666667 0.5345333333333334 1.1795833333333334 0.6175 1.7067620833333335 0.21066250000000003 3.426499583333334 0.2979833333333334 5.145833333333334 0.26125000000000004 2.7708333333333335 0.03958333333333334 5.201250000000001 0 8.075000000000001 -0.2216666666666667 0.4571875000000001 -0.07790000000000001 0.8797 -0.29331250000000003 1.2112500000000002 -0.6175 0.2216666666666667 -0.22174583333333336 0.3872041666666667 -0.49312916666666673 0.4829166666666667 -0.7916666666666667 0.2831 -0.8687750000000001 0.4221958333333334 -1.7780041666666666 0.41166666666666674 -2.691666666666667 0.03166666666666667 -0.4433333333333334 0.03166666666666667 -3.119166666666667 0.03166666666666667 -3.5941825000000005ZM7.710833333333334 11.756250000000001V6.8558175L12.3975 9.317916666666667c-1.3141666666666667 0.7283333333333334 -3.047916666666667 1.5516666666666667 -4.686666666666667 2.4383333333333335Z" fill="#000000" stroke-width="1"></path></svg>'+ target+ '+<br><h6>Youtube Community</h6>';
        }
    }

    updateCounter();
});

document.addEventListener('DOMContentLoaded', () => {
    const counter = document.getElementById('counter2');
    let count = 0;
    const target = 30000; // Target number
    const duration = 6000; // Duration in milliseconds
    const increment = target / (duration / 88);

    function updateCounter() {
        count += increment;
        if (count < target) {
            counter.textContent = Math.floor(count);
            requestAnimationFrame(updateCounter);
        } else {
            counter.innerHTML ='<svg class="telegram" viewBox="-0.5 -0.5 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" id="Facebook--Streamline-Unicons" height="16" width="16"><desc>Facebook Streamline Icon: https://streamlinehq.com</desc><path d="M14.0415 0.15H0.9585C0.7440625 0.15 0.5384375 0.23518750000000002 0.3868125 0.3868125 0.23518750000000002 0.5384375 0.15 0.7440625 0.15 0.9585v13.083c0 0.10618749999999999 0.0209375 0.21131250000000001 0.061562500000000006 0.3094375 0.040625 0.09806250000000001 0.1001875 0.1871875 0.17525 0.26225 0.0750625 0.075125 0.1641875 0.134625 0.2623125 0.1753125 0.09806250000000001 0.0405625 0.2031875 0.0615 0.309375 0.0615h7.0413125v-5.696250000000001H6.0888125v-2.205h1.911V5.295c-0.039625 -0.38825 0.00625 -0.7805 0.1343125 -1.149125s0.33518749999999997 -0.7048749999999999 0.6069375 -0.9850000000000001c0.27175 -0.280125 0.6014375000000001 -0.49743750000000003 0.9660000000000001 -0.636625 0.36462500000000003 -0.13924999999999998 0.7553124999999999 -0.19699999999999998 1.1445625 -0.16924999999999998 0.5720625 -0.0035 1.143875 0.025937500000000002 1.7125625 0.0881875v1.9845h-1.1686874999999999c-0.926125 0 -1.1025 0.441 -1.1025 1.0804375v1.4185625h2.205l-0.286625 2.205h-1.918375V14.850000000000001h3.7485c0.10618749999999999 0 0.21131250000000001 -0.0209375 0.3094375 -0.0615 0.09806250000000001 -0.0406875 0.1871875 -0.1001875 0.26225 -0.1753125 0.075125 -0.0750625 0.134625 -0.1641875 0.1753125 -0.26225 0.0405625 -0.098125 0.0615 -0.20325 0.0615 -0.3094375V0.9585c0 -0.10618749999999999 -0.0209375 -0.21131250000000001 -0.0615 -0.309375 -0.040625 -0.098125 -0.1001875 -0.18724999999999997 -0.1753125 -0.2623125 -0.0750625 -0.0750625 -0.1641875 -0.134625 -0.26225 -0.17525 -0.098125 -0.040625 -0.20325 -0.061562500000000006 -0.3094375 -0.061562500000000006Z" fill="#000000" stroke-width="1"></path></svg>' + target + '+ <br><h6>Facebook Followers</h6> ';
        }
    }

    updateCounter();
});

document.addEventListener('DOMContentLoaded', () => {
    const counter = document.getElementById('counter3');
    let count = 0;
    const target = 6000; // Target number
    const duration = 6000; // Duration in milliseconds
    const increment = target / (duration / 70);

    function updateCounter() {
        count += increment;
        if (count < target) {
            counter.textContent = Math.floor(count);
            requestAnimationFrame(updateCounter);
        } else {
            counter.innerHTML ='<svg class="telegram" viewBox="-0.5 -0.5 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" id="Telegram--Streamline-Unicons" height="16" width="16"><desc>Telegram Streamline Icon: https://streamlinehq.com</desc><path d="M7.5 0.15c-1.4536875 0 -2.8747499999999997 0.4310625 -4.0834375000000005 1.2386875 -1.2086875 0.807625 -2.15075 1.9555624999999999 -2.7070624999999997 3.2985625C0.1531875 6.0303125 0.007625000000000001 7.508125 0.29125 8.933875s0.9836250000000001 2.735375 2.0115 3.763375c1.0279375 1.027875 2.3375624999999998 1.7279375 3.7633125 2.0115625 1.42575 0.2835625 2.9036250000000003 0.138 4.2466875 -0.4183125 1.343 -0.5563125 2.4909375000000002 -1.4983750000000002 3.2985625 -2.7070624999999997C14.4189375 10.374749999999999 14.850000000000001 8.953687500000001 14.850000000000001 7.5c0.0000625 -0.9651875 -0.19 -1.9210625000000001 -0.5593125 -2.8128124999999997 -0.369375 -0.8918125 -0.9107500000000001 -1.7020625 -1.5933125000000001 -2.3846249999999998 -0.6825000000000001 -0.6825000000000001 -1.49275 -1.223875 -2.3845 -1.5932499999999998C9.4210625 0.34 8.46525 0.1499375 7.5 0.15Zm2.3369375 11.137062499999999c-0.027499999999999997 0.0685625 -0.069375 0.1305 -0.12275 0.181625 -0.053437500000000006 0.0510625 -0.117125 0.0901875 -0.18687499999999999 0.1146875 -0.06975 0.0244375 -0.143875 0.03375 -0.21756250000000002 0.027187499999999996 -0.0735625 -0.006562500000000001 -0.1449375 -0.028749999999999998 -0.20931249999999998 -0.065125l-1.9951875 -1.5504375000000001 -1.2806875 1.1814375000000001c-0.0296875 0.022000000000000002 -0.0644375 0.036125 -0.1010625 0.041124999999999995 -0.036625 0.005 -0.073875 0.0007499999999999999 -0.108375 -0.0125l0.2455 -2.1965000000000003 0.0078125 0.00625 0.005062499999999999 -0.043312500000000004s3.5904999999999996 -3.2689375 3.73675 -3.40825c0.14800000000000002 -0.138875 0.09918750000000001 -0.1690625 0.09918750000000001 -0.1690625 0.0084375 -0.16943750000000002 -0.26575000000000004 0 -0.26575000000000004 0l-4.75725 3.0605624999999996 -1.9811875 -0.67475s-0.3043125 -0.109125 -0.3329375 -0.349125c-0.030187500000000003 -0.238125 0.342875 -0.3675 0.342875 -0.3675l7.8769374999999995 -3.12925s0.6475625 -0.2885 0.6475625 0.18925l-1.4027500000000002 7.1636875Z" fill="#000000" stroke-width="1"></path></svg>'+ target + '+ <br><h6>Telegram members</h6> ';
        }
    }

    updateCounter();
});
