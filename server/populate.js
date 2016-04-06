var _ = require('underscore');
var mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/passeidireto");

var colecaoSchema = require('./schemas/colecao');
var discoSchema = require('./schemas/disco');

var Colecao = mongoose.model('Colecao', colecaoSchema);
var Disco = mongoose.model('Disco', discoSchema);


var discoAnita = [{
  title:"DVD Presença de Anita - 3 Discos"
  , description : "Minissérie da TV Globo inspirada na obra de Mário Donato. Anita (Mel Lisboa) é uma garota sensual e misteriosa, que acaba de chegar a uma pequena cidade do interior. Sua presença desgraçadamente sedutora irá transformar a vida de dois homens apaixonados e destruir para sempre uma família."
  , picture : "http://mlb-s2-p.mlstatic.com/box-dvd-presenca-de-anita-3-dvds-14446-MLB2678650750_052012-O.jpg"
  , price : 69.90
},{
  title:"Bang!"
  , description : "'Deixa Ele Sofrer' foi lançada em 16 de julho de 2015 como download digital. O vídeo-clipe de 'Deixa ele Sofrer' foi um sucesso no youtube alcançando 1 milhão de visualizações em menos de 24 horas depois do lançamento, hoje com 5 meses do lançamento acumula mais de 53 milhões de visualizações. 'Bang' foi lançada em 9 de outubro de 2015 em várias plataformas digitais, também foi um sucesso ficou em 1° lugar no iTunes por vários dias e no Spotify Brasil."
  , picture : "http://parceiros.statig.com.br/hugogloss/wp-content/uploads/2015/10/anitta-bang.jpg"
  , price : 29.90
}];

var discoShakira = [{
  title:"Sale El Sol"
  , description : "Estas semanas sin verte. Me parecieron años. Tanto te quise besar."
  , picture : "http://4.bp.blogspot.com/-Az6VR-Sy098/To7v95VnGdI/AAAAAAAAAck/qOhqwstdDkg/s640/Shakira-Sale-el-Sol.jpg"
  , price : 49.90
},{
  title:"Laundry Service"
  , description : "Laundry Service é o quinto álbum de estúdio da artista musical colombiana Shakira. O seu lançamento ocorreu em 13 de novembro de 2001, através da Epic Records."
  , picture : "http://iacom1-a.akamaihd.net/produtos/01/00/item/110380/3/110380358GG.jpg"
  , price : 29.90
}];

var discoLulu = [{
  title:"Amor e Arte"
  , description : "Estas semanas sin verte. Me parecieron años. Tanto te quise besar."
  , picture : "http://mlb-s1-p.mlstatic.com/lulu-santos-e-banda-ao-vivo-cd-e-dvd-dudu-sanches-tour-684411-MLB20560000803_012016-F.jpg"
  , price : 49.90
},{
  title:"Chevrolet Hall | Hall Social"
  , description : "Já dá para ter uma ideia do que Lulu Santos, que se apresenta por aqui na próxima sexta (24), vai armar no palco do Chevrolet Hall. Como parte da turnê Toca Lulu."
  , picture : "http://staticblogs.leiaja.com/sites/hallsocial.com/files/styles/large/public/field/image/galerias/2013/05/lulu-santos-toca-lulu.jpg"
  , price : 29.90
}];
var discoCaptal = [{
  title:"Capital Inicial - Acústico Nyc - ao Vivo - DVD"
  , description : "Capital Inicial - Acústico Nyc - ao Vivo - DVD + 2 CD."
  , picture : "http://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=9210067&qld=90&l=370&a=-1"
  , price : 49.90
},{
  title:"Dvd Capital Inicial Ao Vivo Rock In Rio"
  , description : "Laundry Service é o quinto álbum de estúdio da artista musical colombiana Shakira. O seu lançamento ocorreu em 13 de novembro de 2001, através da Epic Records."
  , picture : "http://mlb-s2-p.mlstatic.com/dvd-capital-inicial-ao-vivo-rock-in-rio-157011-MLB20465711346_102015-F.jpg"
  , price : 29.90
}];
var discoColdplay = [{
  title:"Coldplay Live in 2012"
  , description : "Estas semanas sin verte. Me parecieron años. Tanto te quise besar."
  , picture : "http://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2012/11/Coldplay-Live-2012-Album-CD-DVD-2012-Cover.jpg"
  , price : 49.90
},{
  title:"BOOTSLIVE: Coldplay - Live at iTunes Fest"
  , description : "Laundry Service é o quinto álbum de estúdio da artista musical colombiana Shakira. O seu lançamento ocorreu em 13 de novembro de 2001, através da Epic Records."
  , picture : "http://2.bp.blogspot.com/-zbaiCKuKbhg/VoruZ1aAw4I/AAAAAAAAEu4/Ip0bNSxecFY/s1600/coldplay-musica-birds.png"
  , price : 29.90
}];
var discoJon = [{
  title:"Bon Jovi ♡ on Pinterest"
  , description : "Ew Bonjovi, Albúm Bon Jovi, Jon Bon Jovi, Jovi Good, Bon Jovi , Jon Bonjovi, Bonjovi It S, Bon Jovi 1, Bon Jovi 3."
  , picture : "http://s-media-cache-ak0.pinimg.com/236x/2f/78/52/2f78529eb37aed6394c819cb777df364.jpg"
  , price : 49.90
},{
  title:"PLANET ROCK DVD Website Rare Rock"
  , description : "SOURCE: PRO-SHOT QUALITY: 9.0. MENU: YES CHAPTER SELECTION: YES DURATION APPROX.: 95 MIN."
  , picture : "http://i.ytimg.com/vi/hGXlBLCRyzA/hqdefault.jpg"
  , price : 29.90
}];
var discoBalao = [{
  title:"A Turma do Balão Mágico - album Galera"
  , description : "Estas semanas sin verte. Me parecieron años. Tanto te quise besar."
  , picture : "http://en.kidsmusic.info/photo/a-turma-do-balao-magico/galera-do-balao/a-turma-do-balao-magico-galera-do-balao-cover.jpg"
  , price : 49.90
},{
  title:"Cd+dvd A Turma Do Balão Mágico"
  , description : "Laundry Service é o quinto álbum de estúdio da artista musical colombiana Shakira. O seu lançamento ocorreu em 13 de novembro de 2001, através da Epic Records."
  , picture : "http://mlb-s1-p.mlstatic.com/cddvd-a-turma-do-balo-magico-lacrado-14471-MLB2788522460_062012-F.jpg"
  , price : 29.90
}];
var discoLatino = [{
  title:"Latino – 10 Anos – Ao Vivo"
  , description : "Estas semanas sin verte. Me parecieron años. Tanto te quise besar."
  , picture : "http://2.bp.blogspot.com/-tW_EH2ADpvc/UEt8I3Xly3I/AAAAAAAAQBg/uOEZaNNrmRo/s1600/DVD+Latino+2012.jpg"
  , price : 49.90
},{
  title:"Latino - Junto e Misturado Fazendo a Festa"
  , description : "Laundry Service é o quinto álbum de estúdio da artista musical colombiana Shakira. O seu lançamento ocorreu em 13 de novembro de 2001, através da Epic Records."
  , picture : "http://images1.folha.com.br/livraria/images/2/d/1158408-250x250.png"
  , price : 29.90
}];


var popAnos90 = [{
    artist : "Balao-Magico"
    , discos : discoBalao
},{
    artist : "Latino"
    , discos : discoLatino
}];
var rockInternacional = [{
    artist : "Coldplay"
    , discos : discoColdplay
},{
    artist : "Jon-Bon-Jovi"
    , discos : discoJon
}];
var rockNacional = [{
    artist : "Lulu-Santos"
    , discos : discoLulu
},{
    artist : "Capital-Inicial"
    , discos : discoCaptal
}];
var popAnos2000 = [{
    artist : "Anita"
    , discos : discoAnita
},{
    artist : "Shakira"
    , discos : discoShakira
}];


var categoria = [{categoria:{
    id : 'Rock'
    , type : [{
        name:'Nacional'
        , value:rockNacional
      },{
        name:'Internacional'
        , value:rockInternacional
      }] 
    }
  },
  {categoria:{
        id : 'Pop'
        , type : [{
            name:'Anos-90'
            , value:popAnos90
          },{
            name:'Anos-2000'
            , value:popAnos2000
          }] 
      }
  }];


_.each(categoria,function(data){ 
  var p = new Colecao({
    _id: data.categoria.id, ancestors:[data.categoria.id]
  }); 
  p.save(function(err){
    if(err){
      // console.log((err));
      return;
    }else{
      _.each(data.categoria.type,function(type){
        var p = new Colecao({
          _id: type.name, 
          parent: data.categoria.id, 
          ancestors: [data.categoria.id,type.name]
        }); 
        p.save(function(err){
          if(err){
            // console.log((err));
            return;
          }else{
            _.each(type.value,function(value){
              var p = new Colecao({
                _id: value.artist, 
                parent: type.name, 
                ancestors: [data.categoria.id,type.name,value.artist]
              }); 
              p.save(function(err){
                if(err){
                  // console.log((err));
                  return;
                }else{
                  _.each(value.discos,function(p_disco){
                    var disco = new Disco(p_disco);
                    disco.colecao = p.toObject();
                    disco.save(function(err){
                      if(err){
                        console.log(err);
                      }else{
                        // console.log('save disco');
                      }

                    });
                  });
                }
            });

          });
          }
      });

    });
    }
  });
});