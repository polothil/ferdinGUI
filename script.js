const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const deadmanCheck = document.getElementById('deadman');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let deadman = 0;
  if (deadmanCheck.checked == true) deadman = 1;
  // console.log(deadman);

  let data0 =
    'Pure Gas Solver \r\n\r\nName: ' +
    username.value +
    '\r\n' +
    'Email: ' +
    email.value +
    '\r\n\r\n';

  let data1 =
    'Dimensions of the Domain (LxHxW)\r\n' +
    length2.value +
    ' ' +
    height2.value +
    ' ' +
    width2.value +
    '\r\n\r\n';

  let data2 =
    'Grid Dimensions of the Domain\r\n' + nx.value + ' ' + ny.value + ' ' + nz.value + '\r\n\r\n';

  let data3 =
    'Gas Details\r\n' +
    gasFlowRate.value +
    '\r\n' +
    densityGas.value +
    '\r\n' +
    viscosityGas.value +
    'e-5' +
    '\r\n\r\n';

  let data4 =
    'Fines Details\r\n' +
    finesFlowRate.value +
    '\r\n' +
    finesSize.value +
    'e-6' +
    '\r\n' +
    densityFines.value +
    '\r\n' +
    viscosityFines.value +
    '\r\n\r\n';

  let data5 =
    'Tuyere Details\r\n' +
    tuyereHeight.value +
    '\r\n' +
    tuyereDia.value +
    'e-3' +
    '\r\n' +
    tuyereProtrusionDepth.value +
    '\r\n\r\n';

  let data6 =
    'Deadman Region Parameters\r\n' +
    deadman +
    '\r\n' +
    deadmanXMin.value +
    ' ' +
    deadmanXMax.value +
    '\r\n' +
    deadmanYMin.value +
    ' ' +
    deadmanYMax.value +
    '\r\n' +
    deadmanAngle.value +
    '\r\n\r\n';

  let data7 =
    'Bed Dynamics (BD_Flag)\r\n' +
    bedCorrelation.value +
    '\r\n' +
    bedModel.value +
    '\r\n' +
    bedModel2.value +
    '\r\n\r\n';

  let data8 =
    'Constant Voidage Bed (Used if BD_Flag = 0)\r\n' +
    domainVoidage.value +
    '\r\n' +
    racewayVoidage.value +
    '\r\n\r\n';

  let data9 =
    'Packed Bed (Used if BD_Flag = 1)\r\n' +
    numBedParticles.value +
    '\r\n' +
    numNeighbours.value +
    '\r\n' +
    particleSize.value +
    'e-3' +
    '\r\n' +
    sphericity.value +
    '\r\n' +
    packingMaterialDensity.value +
    '\r\n' +
    mark.value +
    '\r\n' +
    coefFriction.value +
    '\r\n' +
    coefRestitution.value +
    '\r\n' +
    coefStiffness.value +
    '\r\n' +
    packingType.value +
    '\r\n' +
    timePacking.value +
    '\r\n' +
    timeStep.value +
    'e-6' +
    '\r\n\r\n';

  let data10 = 'Moving Bed\r\n' + particleRemovalRate.value + '\r\n\r\n';

  let data11 = 'Physical Modelling Constants\r\n' + g.value + '\r\n' + c.value + '\r\n\r\n';

  let data12 =
    'Convergence Parameters\r\n' +
    toleSpatConv.value +
    'e-3' +
    '\r\n' +
    massBalFines.value +
    'e-10' +
    '\r\n' +
    relaxU.value +
    '\r\n' +
    relaxV.value +
    '\r\n' +
    relaxP.value +
    '\r\n' +
    relaxKE.value +
    '\r\n' +
    relaxDE.value +
    '\r\n' +
    relaxEPFD.value +
    '\r\n' +
    omegaU.value +
    '\r\n' +
    omegaV.value +
    '\r\n' +
    omegaP.value +
    '\r\n' +
    omegaKE.value +
    '\r\n' +
    omegaDE.value +
    '\r\n' +
    omegaUFines.value +
    '\r\n' +
    omegaVFines.value +
    '\r\n' +
    omegaKEFines.value +
    '\r\n' +
    omegaDEFines.value +
    '\r\n\r\n';

  let data13 =
    'Turbulence Modelling Parameters\r\n' +
    c1.value +
    '\r\n' +
    c2.value +
    '\r\n' +
    sigmaK.value +
    '\r\n' +
    sigmaE.value +
    '\r\n' +
    turbulentMixing.value +
    '\r\n\r\n';

  let data =
    data0 +
    data1 +
    data2 +
    data3 +
    data4 +
    data5 +
    data6 +
    data7 +
    data8 +
    data9 +
    data10 +
    data11 +
    data12 +
    data13;

  // Convert the text to BLOB.
  const textToBLOB = new Blob([data], { type: 'text/plain' });
  const sFileName = 'pureGasSolver.txt'; // The file to save the data.

  let newLink = document.createElement('a');
  newLink.download = sFileName;

  if (window.webkitURL != null) {
    newLink.href = window.webkitURL.createObjectURL(textToBLOB);
  } else {
    newLink.href = window.URL.createObjectURL(textToBLOB);
    newLink.style.display = 'none';
    document.body.appendChild(newLink);
  }

  newLink.click();
});
