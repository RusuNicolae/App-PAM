const FarmDto = require("../dto/Farm");

const farmService = require("../service/farm.service");

const farmCtrl = {};

// const farms = [];
// farms.push(new Farm("Catena", "Memo","12"));
// farms.push(new Farm("Help Net", "Grivitei","18"));
// farms.push(new Farm("Sensi Blue", "Mihai Viteazu","15"));

// farmCtrl.farm = (request, response) => {
//   response.send(farms);
// };

farmCtrl.farm= async(request, response) => {
  const farms=await farmService.allFarms();
  response.send(farms);
};

// farmCtrl.farmByStrada = (request, response) => {
//   console.log(request.params.strada);

//   response.send(farms.find(p => p.strada === parseInt(request.params.strada)));
// };
farmCtrl.farmById = async (request, response, next) => {
  const farmId = request.params.id;
  farmService

  .getFarmByID(farmId)
  .then(farm => response.send(farm))
  .catch(err => {
    console.log("here");
    next(err);
  });

};

module.exports = farmCtrl;