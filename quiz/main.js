const _0x5ca14b=_0x2b95;(function(_0x20cd13,_0x54fa0d){const _0x316bee=_0x2b95,_0xf7823b=_0x20cd13();while(!![]){try{const _0x30c0c8=parseInt(_0x316bee(0x1df))/0x1+parseInt(_0x316bee(0x201))/0x2+parseInt(_0x316bee(0x1fe))/0x3+-parseInt(_0x316bee(0x1eb))/0x4*(parseInt(_0x316bee(0x1f5))/0x5)+parseInt(_0x316bee(0x1e6))/0x6+parseInt(_0x316bee(0x200))/0x7+-parseInt(_0x316bee(0x1ec))/0x8*(parseInt(_0x316bee(0x1f1))/0x9);if(_0x30c0c8===_0x54fa0d)break;else _0xf7823b['push'](_0xf7823b['shift']());}catch(_0xdf3ae){_0xf7823b['push'](_0xf7823b['shift']());}}}(_0x3dd3,0x95dfa));let countSpan=document[_0x5ca14b(0x1f8)](_0x5ca14b(0x212)),bullets=document[_0x5ca14b(0x1f8)](_0x5ca14b(0x210)),bulletsSpanContainer=document[_0x5ca14b(0x1f8)](_0x5ca14b(0x20f)),quizArea=document[_0x5ca14b(0x1f8)]('.quiz-area'),answersArea=document[_0x5ca14b(0x1f8)](_0x5ca14b(0x1dc)),submitButton=document[_0x5ca14b(0x1f8)]('.submit-button'),resultsContainer=document['querySelector'](_0x5ca14b(0x1d8)),countdownElement=document[_0x5ca14b(0x1f8)](_0x5ca14b(0x1fb)),currentIndex=0x0,rightAnswers=0x0,countdownInterval;function getQuestions(){const _0x327317=_0x5ca14b;let _0x5ee306=new XMLHttpRequest();_0x5ee306[_0x327317(0x20d)]=function(){const _0x3db3f5=_0x327317;if(this[_0x3db3f5(0x209)]===0x4&&this['status']===0xc8){let _0x1716dc=JSON['parse'](this[_0x3db3f5(0x1e2)]),_0x2ffd39=_0x1716dc[_0x3db3f5(0x1e8)];createBullets(_0x2ffd39),addQuestionData(_0x1716dc[currentIndex],_0x2ffd39),countdown(0x3c,_0x2ffd39),submitButton[_0x3db3f5(0x218)]=()=>{const _0x400dbf=_0x3db3f5;let _0x436487=_0x1716dc[currentIndex][_0x400dbf(0x204)];currentIndex++,checkAnswer(_0x436487,_0x2ffd39),quizArea['innerHTML']='',answersArea[_0x400dbf(0x1ef)]='',addQuestionData(_0x1716dc[currentIndex],_0x2ffd39),handleBullets(),clearInterval(countdownInterval),countdown(0x14,_0x2ffd39),showResults(_0x2ffd39);};}},_0x5ee306[_0x327317(0x1ea)](_0x327317(0x1ee),_0x327317(0x20c),!![]),_0x5ee306[_0x327317(0x215)]();}function _0x3dd3(){const _0x2594a5=['span','readyState','backgroundColor','f12','html_questions.json','onreadystatechange','htmlFor','.bullets\x20.spans','.bullets','radio','.count\x20span','key','keyCode','send','10px','<span\x20class=\x22perfect\x22>Perfect</span>,\x20All\x20Answers\x20Is\x20Good','onclick','answer_','input','ctrlKey','preventDefault','createTextNode','.results','dataset','\x20From\x20','checked','.answers-area','F12','className','214191lyGEWx','question','type','responseText','charCodeAt','label','<span\x20class=\x22good\x22>Good</span>,\x20','4254996HQtOEJ','click','length','getElementsByName','open','92sRVFQM','7073552uedxyY','onkeydown','GET','innerHTML','marginTop','9QZPTIX','createElement','padding','<span\x20class=\x22bad\x22>Bad</span>,\x20','256045rArDyN','addEventListener','forEach','querySelector','name','.bullets\x20.spans\x20span','.countdown','remove','white','443052hmOVWf','title','3686676PpVWkE','2156348rCHXwU','shiftKey','appendChild','right_answer','div','answer','style'];_0x3dd3=function(){return _0x2594a5;};return _0x3dd3();}getQuestions();function createBullets(_0x46e618){const _0x4de044=_0x5ca14b;countSpan[_0x4de044(0x1ef)]=_0x46e618;for(let _0x50dcd4=0x0;_0x50dcd4<_0x46e618;_0x50dcd4++){let _0x50c03f=document[_0x4de044(0x1f2)](_0x4de044(0x208));_0x50dcd4===0x0&&(_0x50c03f[_0x4de044(0x1de)]='on'),bulletsSpanContainer[_0x4de044(0x203)](_0x50c03f);}}function addQuestionData(_0xd47bb4,_0x3da8a9){const _0x397cf5=_0x5ca14b;if(currentIndex<_0x3da8a9){let _0x5c5531=document['createElement']('h2'),_0x4a0239=document['createTextNode'](_0xd47bb4[_0x397cf5(0x1ff)]);_0x5c5531[_0x397cf5(0x203)](_0x4a0239),quizArea['appendChild'](_0x5c5531);for(let _0x22abe4=0x1;_0x22abe4<=0x4;_0x22abe4++){let _0x2db135=document[_0x397cf5(0x1f2)](_0x397cf5(0x205));_0x2db135[_0x397cf5(0x1de)]=_0x397cf5(0x206);let _0xecf663=document['createElement'](_0x397cf5(0x21a));_0xecf663[_0x397cf5(0x1f9)]=_0x397cf5(0x1e0),_0xecf663[_0x397cf5(0x1e1)]=_0x397cf5(0x211),_0xecf663['id']='answer_'+_0x22abe4,_0xecf663[_0x397cf5(0x1d9)][_0x397cf5(0x206)]=_0xd47bb4['answer_'+_0x22abe4];_0x22abe4===0x1&&(_0xecf663[_0x397cf5(0x1db)]=!![]);let _0x14626c=document[_0x397cf5(0x1f2)](_0x397cf5(0x1e4));_0x14626c[_0x397cf5(0x20e)]=_0x397cf5(0x219)+_0x22abe4;let _0x14cc5d=document[_0x397cf5(0x1d7)](_0xd47bb4[_0x397cf5(0x219)+_0x22abe4]);_0x14626c['appendChild'](_0x14cc5d),_0x2db135[_0x397cf5(0x203)](_0xecf663),_0x2db135[_0x397cf5(0x203)](_0x14626c),answersArea[_0x397cf5(0x203)](_0x2db135);}}}function checkAnswer(_0x13745d,_0xebee4e){const _0xa4a100=_0x5ca14b;let _0x305e42=document[_0xa4a100(0x1e9)](_0xa4a100(0x1e0)),_0x2f577d;for(let _0x117648=0x0;_0x117648<_0x305e42[_0xa4a100(0x1e8)];_0x117648++){_0x305e42[_0x117648][_0xa4a100(0x1db)]&&(_0x2f577d=_0x305e42[_0x117648][_0xa4a100(0x1d9)][_0xa4a100(0x206)]);}_0x13745d===_0x2f577d&&rightAnswers++;}function handleBullets(){const _0x5206b5=_0x5ca14b;let _0x14e69c=document['querySelectorAll'](_0x5206b5(0x1fa)),_0x366847=Array['from'](_0x14e69c);_0x366847[_0x5206b5(0x1f7)]((_0x42c816,_0x325d38)=>{const _0x1342ad=_0x5206b5;currentIndex===_0x325d38&&(_0x42c816[_0x1342ad(0x1de)]='on');});}function showResults(_0x246123){const _0x3bbd0b=_0x5ca14b;let _0x2554bd;if(currentIndex===_0x246123){quizArea['remove'](),answersArea['remove'](),submitButton[_0x3bbd0b(0x1fc)](),bullets[_0x3bbd0b(0x1fc)]();if(rightAnswers>_0x246123/0x2&&rightAnswers<_0x246123)_0x2554bd=_0x3bbd0b(0x1e5)+rightAnswers+_0x3bbd0b(0x1da)+_0x246123;else rightAnswers===_0x246123?_0x2554bd=_0x3bbd0b(0x217):_0x2554bd=_0x3bbd0b(0x1f4)+rightAnswers+_0x3bbd0b(0x1da)+_0x246123;resultsContainer[_0x3bbd0b(0x1ef)]=_0x2554bd,resultsContainer[_0x3bbd0b(0x207)][_0x3bbd0b(0x1f3)]=_0x3bbd0b(0x216),resultsContainer[_0x3bbd0b(0x207)][_0x3bbd0b(0x20a)]=_0x3bbd0b(0x1fd),resultsContainer[_0x3bbd0b(0x207)][_0x3bbd0b(0x1f0)]=_0x3bbd0b(0x216);}}function _0x2b95(_0x46632a,_0x34c67e){const _0x3dd343=_0x3dd3();return _0x2b95=function(_0x2b957e,_0x29a092){_0x2b957e=_0x2b957e-0x1d7;let _0x58a7d6=_0x3dd343[_0x2b957e];return _0x58a7d6;},_0x2b95(_0x46632a,_0x34c67e);}function countdown(_0x49bb48,_0x31857d){if(currentIndex<_0x31857d){let _0x4f7928,_0xfc8d98;countdownInterval=setInterval(function(){const _0x3a1996=_0x2b95;_0x4f7928=parseInt(_0x49bb48/0x3c),_0xfc8d98=parseInt(_0x49bb48%0x3c),_0x4f7928=_0x4f7928<0xa?'0'+_0x4f7928:_0x4f7928,_0xfc8d98=_0xfc8d98<0xa?'0'+_0xfc8d98:_0xfc8d98,countdownElement[_0x3a1996(0x1ef)]=_0x4f7928+':'+_0xfc8d98,--_0x49bb48<0x0&&(clearInterval(countdownInterval),submitButton[_0x3a1996(0x1e7)]());},0x3e8);}}document[_0x5ca14b(0x1f6)]('contextmenu',function(_0x20044d){const _0x306491=_0x5ca14b;_0x20044d[_0x306491(0x21c)]();}),document['oncontextmenu']=()=>{return![];},document[_0x5ca14b(0x1ed)]=_0x2708ac=>{const _0x39847b=_0x5ca14b;if(_0x2708ac[_0x39847b(0x213)]==_0x39847b(0x1dd))return![];if(_0x2708ac['key']==_0x39847b(0x20b))return![];if(_0x2708ac[_0x39847b(0x21b)]&&_0x2708ac[_0x39847b(0x213)]=='u')return![];if(_0x2708ac[_0x39847b(0x21b)]&&_0x2708ac[_0x39847b(0x213)]=='U')return![];if(_0x2708ac['ctrlKey']&&_0x2708ac[_0x39847b(0x213)]=='a')return![];if(_0x2708ac[_0x39847b(0x21b)]&&_0x2708ac[_0x39847b(0x213)]=='A')return![];if(_0x2708ac['ctrlKey']&&_0x2708ac[_0x39847b(0x213)]=='C')return![];if(_0x2708ac[_0x39847b(0x21b)]&&_0x2708ac[_0x39847b(0x213)]=='c')return![];if(_0x2708ac[_0x39847b(0x21b)]&&_0x2708ac[_0x39847b(0x213)]=='v')return![];if(_0x2708ac[_0x39847b(0x21b)]&&_0x2708ac[_0x39847b(0x213)]=='V')return![];},document[_0x5ca14b(0x1ed)]=function(_0x28f415){const _0x189cb4=_0x5ca14b;if(event[_0x189cb4(0x214)]==0x7b)return![];if(event[_0x189cb4(0x214)]=='Q')return![];if(_0x28f415[_0x189cb4(0x21b)]&&_0x28f415[_0x189cb4(0x202)]&&_0x28f415[_0x189cb4(0x214)]=='I'['charCodeAt'](0x0))return![];if(_0x28f415[_0x189cb4(0x21b)]&&_0x28f415[_0x189cb4(0x202)]&&_0x28f415['keyCode']=='C'[_0x189cb4(0x1e3)](0x0))return![];if(_0x28f415[_0x189cb4(0x21b)]&&_0x28f415['shiftKey']&&_0x28f415['keyCode']=='J'['charCodeAt'](0x0))return![];if(_0x28f415[_0x189cb4(0x21b)]&&_0x28f415[_0x189cb4(0x202)]&&_0x28f415[_0x189cb4(0x214)]=='S'[_0x189cb4(0x1e3)](0x0))return![];if(_0x28f415[_0x189cb4(0x21b)]&&_0x28f415[_0x189cb4(0x202)]&&_0x28f415[_0x189cb4(0x214)]=='Q'['charCodeAt'](0x0))return![];if(_0x28f415['ctrlKey']&&_0x28f415[_0x189cb4(0x214)]=='U'['charCodeAt'](0x0))return![];if(_0x28f415[_0x189cb4(0x21b)]&&_0x28f415[_0x189cb4(0x214)]=='C'[_0x189cb4(0x1e3)](0x0))return!![];if(_0x28f415[_0x189cb4(0x21b)]&&_0x28f415[_0x189cb4(0x214)]=='I'[_0x189cb4(0x1e3)](0x0))return![];if(_0x28f415[_0x189cb4(0x21b)]&&_0x28f415[_0x189cb4(0x214)]=='S'[_0x189cb4(0x1e3)](0x0))return![];if(_0x28f415[_0x189cb4(0x21b)]&&_0x28f415[_0x189cb4(0x214)]=='V'[_0x189cb4(0x1e3)](0x0))return!![];};
