import { Injectable } from '@angular/core';
/*
  Generated class for the Sqlite provider.
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
declare var window : any;
@Injectable()
export class SqlStorageProvider {
  public text : string = '';
  message: string = '';
  phone: string = '';
  name: string = '';
  DB_NAME: string = 'jardim.db';
  public db = null;
  public arr = [];
  public cidades = [];

  constructor() {}
 /**
  * 
  * Open The Datebase
  */
  openDb() {
    this.db = window.sqlitePlugin.openDatabase({name: 'jardim.db', location: 'default'});
    this.db.transaction((tx) => {
        tx.executeSql('CREATE TABLE IF NOT EXISTS cidades (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, ibge INTEGER, nome TEXT, uf TEXT)');          
      }, (e) => {
        console.log('Transtion Error', e);
      }, () => {
        console.log('Populated Datebase OK..');
      })
  }
  /**
   * 
   * @param addItem for adding: function
   */
  addItem() {
    return new Promise(resolve => {
  this.cidades = [
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3195", "4100103", "Abatiá", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3196", "4100202", "Adrianópolis", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3197", "4100301", "Agudos do Sul", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3198", "4100400", "Almirante Tamandaré", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3199", "4100459", "Altamira do Paraná", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3200", "4128625", "Alto Paraíso", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3201", "4100608", "Alto Paraná", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3202", "4100707", "Alto Piquiri", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3203", "4100509", "Altônia", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3204", "4100806", "Alvorada do Sul", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3205", "4100905", "Amaporã", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3206", "4101002", "Ampére", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3207", "4101051", "Anahy", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3208", "4101101", "Andirá", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3209", "4101150", "Ângulo", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3210", "4101200", "Antonina", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3211", "4101309", "Antônio Olinto", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3212", "4101408", "Apucarana", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3213", "4101507", "Arapongas", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3214", "4101606", "Arapoti", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3215", "4101655", "Arapuã", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3216", "4101705", "Araruna", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3217", "4101804", "Araucária", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3218", "4101853", "Ariranha do Ivaí", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3219", "4101903", "Assaí", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3220", "4102000", "Assis Chateaubriand", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3221", "4102109", "Astorga", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3222", "4102208", "Atalaia", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3223", "4102307", "Balsa Nova", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3224", "4102406", "Bandeirantes", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3225", "4102505", "Barbosa Ferraz", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3226", "4102703", "Barra do Jacaré", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3227", "4102604", "Barracão", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3228", "4102752", "Bela Vista da Caroba", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3229", "4102802", "Bela Vista do Paraíso", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3230", "4102901", "Bituruna", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3231", "4103008", "Boa Esperança", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3232", "4103024", "Boa Esperança do Iguaçu", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3233", "4103040", "Boa Ventura de São Roque", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3234", "4103057", "Boa Vista da Aparecida", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3235", "4103107", "Bocaiúva do Sul", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3236", "4103156", "Bom Jesus do Sul", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3237", "4103206", "Bom Sucesso", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3238", "4103222", "Bom Sucesso do Sul", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3239", "4103305", "Borrazópolis", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3240", "4103354", "Braganey", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3241", "4103370", "Brasilândia do Sul", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3242", "4103404", "Cafeara", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3243", "4103453", "Cafelândia", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3244", "4103479", "Cafezal do Sul", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3245", "4103503", "Califórnia", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3246", "4103602", "Cambará", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3247", "4103701", "Cambé", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3248", "4103800", "Cambira", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3249", "4103909", "Campina da Lagoa", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3250", "4103958", "Campina do Simão", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3251", "4104006", "Campina Grande do Sul", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3252", "4104055", "Campo Bonito", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3253", "4104105", "Campo do Tenente", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3254", "4104204", "Campo Largo", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3255", "4104253", "Campo Magro", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3256", "4104303", "Campo Mourão", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3257", "4104402", "Cândido de Abreu", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3258", "4104428", "Candói", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3259", "4104451", "Cantagalo", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3260", "4104501", "Capanema", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3261", "4104600", "Capitão Leônidas Marques", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3262", "4104659", "Carambeí", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3263", "4104709", "Carlópolis", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3264", "4104808", "Cascavel", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3265", "4104907", "Castro", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3266", "4105003", "Catanduvas", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3267", "4105102", "Centenário do Sul", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3268", "4105201", "Cerro Azul", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3269", "4105300", "Céu Azul", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3270", "4105409", "Chopinzinho", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3271", "4105508", "Cianorte", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3272", "4105607", "Cidade Gaúcha", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3273", "4105706", "Clevelândia", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3274", "4105805", "Colombo", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3275", "4105904", "Colorado", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3276", "4106001", "Congonhinhas", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3277", "4106100", "Conselheiro Mairinck", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3278", "4106209", "Contenda", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3279", "4106308", "Corbélia", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3280", "4106407", "Cornélio Procópio", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3281", "4106456", "Coronel Domingos Soares", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3282", "4106506", "Coronel Vivida", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3283", "4106555", "Corumbataí do Sul", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3284", "4106803", "Cruz Machado", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3285", "4106571", "Cruzeiro do Iguaçu", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3286", "4106605", "Cruzeiro do Oeste", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3287", "4106704", "Cruzeiro do Sul", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3288", "4106852", "Cruzmaltina", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3289", "4106902", "Curitiba", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3290", "4107009", "Curiúva", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3291", "4107108", "Diamante do Norte", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3292", "4107124", "Diamante do Sul", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3293", "4107157", "Diamante d\'Oeste", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3294", "4107207", "Dois Vizinhos", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3295", "4107256", "Douradina", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3296", "4107306", "Doutor Camargo", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3297", "4128633", "Doutor Ulysses", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3298", "4107405", "Enéas Marques", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3299", "4107504", "Engenheiro Beltrão", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3300", "4107538", "Entre Rios do Oeste", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3301", "4107520", "Esperança Nova", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3302", "4107546", "Espigão Alto do Iguaçu", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3303", "4107553", "Farol", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3304", "4107603", "Faxinal", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3305", "4107652", "Fazenda Rio Grande", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3306", "4107702", "Fênix", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3307", "4107736", "Fernandes Pinheiro", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3308", "4107751", "Figueira", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3309", "4107850", "Flor da Serra do Sul", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3310", "4107801", "Floraí", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3311", "4107900", "Floresta", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3312", "4108007", "Florestópolis", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3313", "4108106", "Flórida", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3314", "4108205", "Formosa do Oeste", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3315", "4108304", "Foz do Iguaçu", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3316", "4108452", "Foz do Jordão", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3317", "4108320", "Francisco Alves", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3318", "4108403", "Francisco Beltrão", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3319", "4108502", "General Carneiro", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3320", "4108551", "Godoy Moreira", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3321", "4108601", "Goioerê", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3322", "4108650", "Goioxim", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3323", "4108700", "Grandes Rios", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3324", "4108809", "Guaíra", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3325", "4108908", "Guairaçá", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3326", "4108957", "Guamiranga", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3327", "4109005", "Guapirama", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3328", "4109104", "Guaporema", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3329", "4109203", "Guaraci", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3330", "4109302", "Guaraniaçu", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3331", "4109401", "Guarapuava", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3332", "4109500", "Guaraqueçaba", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3333", "4109609", "Guaratuba", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3334", "4109658", "Honório Serpa", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3335", "4109708", "Ibaiti", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3336", "4109757", "Ibema", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3337", "4109807", "Ibiporã", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3338", "4109906", "Icaraíma", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3339", "4110003", "Iguaraçu", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3340", "4110052", "Iguatu", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3341", "4110078", "Imbaú", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3342", "4110102", "Imbituva", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3343", "4110201", "Inácio Martins", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3344", "4110300", "Inajá", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3345", "4110409", "Indianópolis", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3346", "4110508", "Ipiranga", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3347", "4110607", "Iporã", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3348", "4110656", "Iracema do Oeste", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3349", "4110706", "Irati", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3350", "4110805", "Iretama", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3351", "4110904", "Itaguajé", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3352", "4110953", "Itaipulândia", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3353", "4111001", "Itambaracá", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3354", "4111100", "Itambé", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3355", "4111209", "Itapejara d\'Oeste", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3356", "4111258", "Itaperuçu", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3357", "4111308", "Itaúna do Sul", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3358", "4111407", "Ivaí", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3359", "4111506", "Ivaiporã", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3360", "4111555", "Ivaté", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3361", "4111605", "Ivatuba", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3362", "4111704", "Jaboti", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3363", "4111803", "Jacarezinho", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3364", "4111902", "Jaguapitã", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3365", "4112009", "Jaguariaíva", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3366", "4112108", "Jandaia do Sul", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3367", "4112207", "Janiópolis", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3368", "4112306", "Japira", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3369", "4112405", "Japurá", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3370", "4112504", "Jardim Alegre", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3371", "4112603", "Jardim Olinda", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3372", "4112702", "Jataizinho", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3373", "4112751", "Jesuítas", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3374", "4112801", "Joaquim Távora", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3375", "4112900", "Jundiaí do Sul", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3376", "4112959", "Juranda", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3377", "4113007", "Jussara", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3378", "4113106", "Kaloré", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3379", "4113205", "Lapa", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3380", "4113254", "Laranjal", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3381", "4113304", "Laranjeiras do Sul", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3382", "4113403", "Leópolis", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3383", "4113429", "Lidianópolis", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3384", "4113452", "Lindoeste", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3385", "4113502", "Loanda", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3386", "4113601", "Lobato", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3387", "4113700", "Londrina", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3388", "4113734", "Luiziana", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3389", "4113759", "Lunardelli", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3390", "4113809", "Lupionópolis", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3391", "4113908", "Mallet", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3392", "4114005", "Mamborê", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3393", "4114104", "Mandaguaçu", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3394", "4114203", "Mandaguari", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3395", "4114302", "Mandirituba", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3396", "4114351", "Manfrinópolis", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3397", "4114401", "Mangueirinha", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3398", "4114500", "Manoel Ribas", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3399", "4114609", "Marechal Cândido Rondon", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3400", "4114708", "Maria Helena", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3401", "4114807", "Marialva", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3402", "4114906", "Marilândia do Sul", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3403", "4115002", "Marilena", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3404", "4115101", "Mariluz", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3405", "4115200", "Maringá", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3406", "4115309", "Mariópolis", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3407", "4115358", "Maripá", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3408", "4115408", "Marmeleiro", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3409", "4115457", "Marquinho", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3410", "4115507", "Marumbi", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3411", "4115606", "Matelândia", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3412", "4115705", "Matinhos", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3413", "4115739", "Mato Rico", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3414", "4115754", "Mauá da Serra", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3415", "4115804", "Medianeira", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3416", "4115853", "Mercedes", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3417", "4115903", "Mirador", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3418", "4116000", "Miraselva", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3419", "4116059", "Missal", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3420", "4116109", "Moreira Sales", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3421", "4116208", "Morretes", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3422", "4116307", "Munhoz de Melo", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3423", "4116406", "Nossa Senhora das Graças", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3424", "4116505", "Nova Aliança do Ivaí", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3425", "4116604", "Nova América da Colina", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3426", "4116703", "Nova Aurora", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3427", "4116802", "Nova Cantu", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3428", "4116901", "Nova Esperança", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3429", "4116950", "Nova Esperança do Sudoeste", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3430", "4117008", "Nova Fátima", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3431", "4117057", "Nova Laranjeiras", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3432", "4117107", "Nova Londrina", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3433", "4117206", "Nova Olímpia", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3434", "4117255", "Nova Prata do Iguaçu", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3435", "4117214", "Nova Santa Bárbara", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3436", "4117222", "Nova Santa Rosa", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3437", "4117271", "Nova Tebas", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3438", "4117297", "Novo Itacolomi", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3439", "4117305", "Ortigueira", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3440", "4117404", "Ourizona", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3441", "4117453", "Ouro Verde do Oeste", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3442", "4117503", "Paiçandu", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3443", "4117602", "Palmas", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3444", "4117701", "Palmeira", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3445", "4117800", "Palmital", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3446", "4117909", "Palotina", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3447", "4118006", "Paraíso do Norte", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3448", "4118105", "Paranacity", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3449", "4118204", "Paranaguá", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3450", "4118303", "Paranapoema", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3451", "4118402", "Paranavaí", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3452", "4118451", "Pato Bragado", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3453", "4118501", "Pato Branco", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3454", "4118600", "Paula Freitas", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3455", "4118709", "Paulo Frontin", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3456", "4118808", "Peabiru", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3457", "4118857", "Perobal", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3458", "4118907", "Pérola", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3459", "4119004", "Pérola d\'Oeste", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3460", "4119103", "Piên", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3461", "4119152", "Pinhais", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3462", "4119251", "Pinhal de São Bento", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3463", "4119202", "Pinhalão", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3464", "4119301", "Pinhão", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3465", "4119400", "Piraí do Sul", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3466", "4119509", "Piraquara", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3467", "4119608", "Pitanga", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3468", "4119657", "Pitangueiras", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3469", "4119707", "Planaltina do Paraná", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3470", "4119806", "Planalto", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3471", "4119905", "Ponta Grossa", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3472", "4119954", "Pontal do Paraná", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3473", "4120002", "Porecatu", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3474", "4120101", "Porto Amazonas", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3475", "4120150", "Porto Barreiro", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3476", "4120200", "Porto Rico", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3477", "4120309", "Porto Vitória", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3478", "4120333", "Prado Ferreira", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3479", "4120358", "Pranchita", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3480", "4120408", "Presidente Castelo Branco", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3481", "4120507", "Primeiro de Maio", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3482", "4120606", "Prudentópolis", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3483", "4120655", "Quarto Centenário", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3484", "4120705", "Quatiguá", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3485", "4120804", "Quatro Barras", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3486", "4120853", "Quatro Pontes", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3487", "4120903", "Quedas do Iguaçu", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3488", "4121000", "Querência do Norte", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3489", "4121109", "Quinta do Sol", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3490", "4121208", "Quitandinha", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3491", "4121257", "Ramilândia", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3492", "4121307", "Rancho Alegre", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3493", "4121356", "Rancho Alegre d\'Oeste", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3494", "4121406", "Realeza", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3495", "4121505", "Rebouças", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3496", "4121604", "Renascença", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3497", "4121703", "Reserva", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3498", "4121752", "Reserva do Iguaçu", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3499", "4121802", "Ribeirão Claro", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3500", "4121901", "Ribeirão do Pinhal", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3501", "4122008", "Rio Azul", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3502", "4122107", "Rio Bom", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3503", "4122156", "Rio Bonito do Iguaçu", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3504", "4122172", "Rio Branco do Ivaí", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3505", "4122206", "Rio Branco do Sul", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3506", "4122305", "Rio Negro", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3507", "4122404", "Rolândia", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3508", "4122503", "Roncador", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3509", "4122602", "Rondon", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3510", "4122651", "Rosário do Ivaí", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3511", "4122701", "Sabáudia", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3512", "4122800", "Salgado Filho", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3513", "4122909", "Salto do Itararé", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3514", "4123006", "Salto do Lontra", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3515", "4123105", "Santa Amélia", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3516", "4123204", "Santa Cecília do Pavão", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3517", "4123303", "Santa Cruz de Monte Castelo", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3518", "4123402", "Santa Fé", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3519", "4123501", "Santa Helena", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3520", "4123600", "Santa Inês", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3521", "4123709", "Santa Isabel do Ivaí", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3522", "4123808", "Santa Izabel do Oeste", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3523", "4123824", "Santa Lúcia", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3524", "4123857", "Santa Maria do Oeste", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3525", "4123907", "Santa Mariana", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3526", "4123956", "Santa Mônica", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3527", "4124020", "Santa Tereza do Oeste", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3528", "4124053", "Santa Terezinha de Itaipu", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3529", "4124004", "Santana do Itararé", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3530", "4124103", "Santo Antônio da Platina", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3531", "4124202", "Santo Antônio do Caiuá", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3532", "4124301", "Santo Antônio do Paraíso", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3533", "4124400", "Santo Antônio do Sudoeste", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3534", "4124509", "Santo Inácio", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3535", "4124608", "São Carlos do Ivaí", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3536", "4124707", "São Jerônimo da Serra", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3537", "4124806", "São João", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3538", "4124905", "São João do Caiuá", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3539", "4125001", "São João do Ivaí", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3540", "4125100", "São João do Triunfo", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3541", "4125308", "São Jorge do Ivaí", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3542", "4125357", "São Jorge do Patrocínio", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3543", "4125209", "São Jorge d\'Oeste", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3544", "4125407", "São José da Boa Vista", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3545", "4125456", "São José das Palmeiras", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3546", "4125506", "São José dos Pinhais", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3547", "4125555", "São Manoel do Paraná", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3548", "4125605", "São Mateus do Sul", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3549", "4125704", "São Miguel do Iguaçu", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3550", "4125753", "São Pedro do Iguaçu", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3551", "4125803", "São Pedro do Ivaí", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3552", "4125902", "São Pedro do Paraná", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3553", "4126009", "São Sebastião da Amoreira", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3554", "4126108", "São Tomé", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3555", "4126207", "Sapopema", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3556", "4126256", "Sarandi", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3557", "4126272", "Saudade do Iguaçu", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3558", "4126306", "Sengés", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3559", "4126355", "Serranópolis do Iguaçu", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3560", "4126405", "Sertaneja", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3561", "4126504", "Sertanópolis", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3562", "4126603", "Siqueira Campos", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3563", "4126652", "Sulina", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3564", "4126678", "Tamarana", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3565", "4126702", "Tamboara", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3566", "4126801", "Tapejara", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3567", "4126900", "Tapira", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3568", "4127007", "Teixeira Soares", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3569", "4127106", "Telêmaco Borba", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3570", "4127205", "Terra Boa", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3571", "4127304", "Terra Rica", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3572", "4127403", "Terra Roxa", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3573", "4127502", "Tibagi", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3574", "4127601", "Tijucas do Sul", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3575", "4127700", "Toledo", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3576", "4127809", "Tomazina", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3577", "4127858", "Três Barras do Paraná", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3578", "4127882", "Tunas do Paraná", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3579", "4127908", "Tuneiras do Oeste", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3580", "4127957", "Tupãssi", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3581", "4127965", "Turvo", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3582", "4128005", "Ubiratã", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3583", "4128104", "Umuarama", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3584", "4128203", "União da Vitória", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3585", "4128302", "Uniflor", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3586", "4128401", "Uraí", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3587", "4128534", "Ventania", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3588", "4128559", "Vera Cruz do Oeste", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3589", "4128609", "Verê", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3590", "4128658", "Virmond", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3591", "4128708", "Vitorino", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3592", "4128500", "Wenceslau Braz", "PR")',
    'INSERT INTO cidades (id, ibge, nome, uf) VALUES ("3593", "4128807", "Xambrê", "PR")'
  ];
      for ( var i = 0; i < this.cidades.length; i++){
      var InsertQuery = this.cidades[i]; // 'INSERT INTO cidades (ibge INTEGER, nome TEXT, uf TEXT) VALUES (?, ?, ?)';
      this.db.executeSql(InsertQuery, [this.cidades[i].ibge, this.cidades[i].nome, this.cidades[i].uf], (r) => {
          console.log('Inserted: ', this.cidades[i].ibge, this.cidades[i].nome, this.cidades[i].uf);
          this.getRows()
            .then(s => {
              resolve(true)
            });
        }, e => {
          console.log('Inserted Error', e);
          resolve(false);
        })
      }
    })
      
  }

  //Refresh everytime

  getRows() {
    return new Promise(res => {
      this.arr = [];
      let query = 'SELECT * FROM cidades';
      this
        .db
        .executeSql(query, [], rs => {
          if (rs.rows.length > 0) {
            for (var i = 0; i < rs.rows.length; i++) {
              var item = rs
                .rows
                .item(i);
              this
                .arr
                .push(item);
            }
          }
          res(true);
        }, (e) => {
          console.log('Sql Query Error', e);
        });
    })

  }
  //to delete any Item
  del(id) {
    return new Promise(resolve => {
      var query = 'DELETE FROM cidades WHERE id=?';
      this
        .db
        .executeSql(query, [id], (s) => {
          console.log('Delete Success...', s);
          this
            .getRows()
            .then(s => {
              resolve(true);
            });
        }, (err) => {
          console.log('Deleting Error', err);
        });
    })

  }
  //to Update any Item
  update(id, txt) {
    return new Promise(res => {
      var query = 'UPDATE cidades SET name=?  WHERE id=?';
      this
        .db
        .executeSql(query, [
          txt, id
        ], (s) => {
          console.log('Update Success...', s);
          this
            .getRows()
            .then(s => {
              res(true);
            });
        }, (err) => {
          console.log('Updating Error', err);
        });
    })

  }
  
}