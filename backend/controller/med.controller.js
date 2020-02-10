const MedDto = require("../dto/Med");
const medService = require("../service/med.service");
const medCtrl = {};

// const meds = [];
// meds.push(new Med("Paracetamol", "Catena"));
// meds.push(new Med("Aspirina", "SensiBlue"));
// meds.push(new Med("Nurofen", "HelpNet"));
// meds.push(new Med("Algocalmin", "Catena"));

// medCtrl.med = (request, response) => {
//   response.send(meds);
// };

medCtrl.med = async (request, response) => {
  const meds = await medService.allMeds();
  response.send(meds);
};


// medCtrl.medByFarmacie = (request, response) => {
//   console.log(request.params.farmacie);

//   response.send(meds.find(p => p.farmacie === parseInt(request.params.farmacie)));
// };

medCtrl.medByFarmacie = async (request, response, next) => {
  const medFarmacie = request.params.farmacie;
  medService
    .getMedByFarmacie(medFarmacie)
    .then(med => response.send(med))
    .catch(err => {
      console.log("here");
      next(err);
    });
};

module.exports = medCtrl;
