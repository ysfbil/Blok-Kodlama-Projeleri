if (window.VFabrika == undefined) window.VFabrika = {};
if (window.VFabrika.dataset == undefined) window.VFabrika.dataset = {};

Sbt.plugins.FeedbackRichTextDataJSON = 
{
	"FeedbackRichText": [
		{
			"id": 1,			
			"soundFileName": "hpain1",			
			"text": "Tebrikler bütün soruları cevapladın...",			
			"isModal": true,			
			"isVisual": true,			
			"isAutoClose": true			
		}		
	]
}

Sbt.components.AnimationPopupDataJSON = 
{
	"AnimationPopup": [
		{
			"id": 1,			
			"animFileName": "ahmo ve spinosaurus",			
			"animFileExtension": ".mp4",			
			"border": true,			
			"controls": true,			
			"autoplay": false,			
			"width": 401,			
			"height": 293,			
			"isModal": true,			
			"isAutoClose": false,			
			"closeButton": true,			
			"animFilePath": "resources/video/"			
		}		
	]
}

Sbt.plugins.QuestionDataJSON = 
{
	"Question": [
		{
			"id": 1,			
			"soundFileName": "",			
			"text": "Türkiyenin başkenti neresidir?",			
			"soundFilePath": ""			
		},		
		{
			"id": 2,			
			"soundFileName": "",			
			"text": "Hangisi Ortadoğuda değildir?",			
			"soundFilePath": ""			
		},		
		{
			"id": 3,			
			"soundFileName": "",			
			"text": "Türkiyenin en uzun sınırı hangi ülke iledir?",			
			"soundFilePath": ""			
		},		
		{
			"id": 4,			
			"soundFileName": "",			
			"text": "Hangi ülke daha soğuktur?",			
			"soundFilePath": ""			
		}		
	]
}

Sbt.plugins.QuestionChoicesDataJSON = 
{
	"QuestionChoices": [
		{
			"id": 1,			
			"part": 1,			
			"text": "Siirt",			
			"keyword": "a",			
			"hasAnswer": false,			
			"answerText": "",			
			"answerSoundFileName": "",			
			"answerSoundFilePath": ""			
		},		
		{
			"id": 1,			
			"part": 2,			
			"text": "Erzurum",			
			"keyword": "b",			
			"hasAnswer": false,			
			"answerText": "",			
			"answerSoundFileName": "",			
			"answerSoundFilePath": ""			
		},		
		{
			"id": 1,			
			"part": 3,			
			"text": "Ankara",			
			"keyword": "c",			
			"hasAnswer": false,			
			"answerText": "",			
			"answerSoundFileName": "",			
			"answerSoundFilePath": ""			
		},		
		{
			"id": 1,			
			"part": 4,			
			"text": "Yozgat",			
			"keyword": "d",			
			"hasAnswer": false,			
			"answerText": "",			
			"answerSoundFileName": "",			
			"answerSoundFilePath": ""			
		},		
		{
			"id": 2,			
			"part": 1,			
			"text": "Siirt",			
			"keyword": "a",			
			"hasAnswer": false,			
			"answerText": "",			
			"answerSoundFileName": "",			
			"answerSoundFilePath": ""			
		},		
		{
			"id": 2,			
			"part": 2,			
			"text": "Türkiye",			
			"keyword": "b",			
			"hasAnswer": false,			
			"answerText": "",			
			"answerSoundFileName": "",			
			"answerSoundFilePath": ""			
		},		
		{
			"id": 2,			
			"part": 3,			
			"text": "Britanya",			
			"keyword": "c",			
			"hasAnswer": false,			
			"answerText": "",			
			"answerSoundFileName": "",			
			"answerSoundFilePath": ""			
		},		
		{
			"id": 2,			
			"part": 4,			
			"text": "Filistin",			
			"keyword": "d",			
			"hasAnswer": false,			
			"answerText": "",			
			"answerSoundFileName": "",			
			"answerSoundFilePath": ""			
		},		
		{
			"id": 3,			
			"part": 1,			
			"text": "Vietnam",			
			"keyword": "a",			
			"hasAnswer": false,			
			"answerText": "",			
			"answerSoundFileName": "",			
			"answerSoundFilePath": ""			
		},		
		{
			"id": 3,			
			"part": 2,			
			"text": "Irak",			
			"keyword": "b",			
			"hasAnswer": false,			
			"answerText": "",			
			"answerSoundFileName": "",			
			"answerSoundFilePath": ""			
		},		
		{
			"id": 3,			
			"part": 3,			
			"text": "İran",			
			"keyword": "c",			
			"hasAnswer": false,			
			"answerText": "",			
			"answerSoundFileName": "",			
			"answerSoundFilePath": ""			
		},		
		{
			"id": 3,			
			"part": 4,			
			"text": "Suriye",			
			"keyword": "d",			
			"hasAnswer": false,			
			"answerText": "",			
			"answerSoundFileName": "",			
			"answerSoundFilePath": ""			
		},		
		{
			"id": 4,			
			"part": 1,			
			"text": "Norveç",			
			"keyword": "a",			
			"hasAnswer": false,			
			"answerText": "",			
			"answerSoundFileName": "",			
			"answerSoundFilePath": ""			
		},		
		{
			"id": 4,			
			"part": 2,			
			"text": "Türkiye",			
			"keyword": "b",			
			"hasAnswer": false,			
			"answerText": "",			
			"answerSoundFileName": "",			
			"answerSoundFilePath": ""			
		},		
		{
			"id": 4,			
			"part": 3,			
			"text": "Almanya",			
			"keyword": "c",			
			"hasAnswer": false,			
			"answerText": "",			
			"answerSoundFileName": "",			
			"answerSoundFilePath": ""			
		},		
		{
			"id": 4,			
			"part": 4,			
			"text": "Hicaz",			
			"keyword": "d",			
			"hasAnswer": false,			
			"answerText": "",			
			"answerSoundFileName": "",			
			"answerSoundFilePath": ""			
		}		
	]
}

window.VFabrika.dataset.Hypothesis = [
	{
		"id": 1,		
		"questionText": "Neden cisimler yere düşerler?",		
		"predictionText": "Dünya çekirdeğinin manyetik etkisi nedeniyle. Bu hipotezi test etmek için Deney 1 olarak bir mıknatıs alıp hangi cisimleri çekebildiğine bakarız. <br />Deney 1 sonuçları: {{combo1}}<br /><br />Dünyanın çekim kuvvetini anlamak için {{combo2}} cisimlerini alır ve yere düşme durumlarını inceleriz.",		
		"width": 700,		
		"height": 340,		
		"positionX": -1,		
		"positionY": -1		
	}	
]

window.VFabrika.dataset.HypothesisControls = [
	{
		"id": 0,		
		"hypothesisId": 1,		
		"name": "combo1"		
	},	
	{
		"id": 1,		
		"hypothesisId": 1,		
		"name": "combo2"		
	}	
]

window.VFabrika.dataset.HypothesisControlItems = [
	{
		"id": 0,		
		"hypothesisControlId": 0,		
		"text": "Tahta",		
		"value": "1"		
	},	
	{
		"id": 1,		
		"hypothesisControlId": 0,		
		"text": "Demir",		
		"value": "0"		
	},	
	{
		"id": 2,		
		"hypothesisControlId": 0,		
		"text": "Plastik",		
		"value": "2"		
	},	
	{
		"id": 0,		
		"hypothesisControlId": 1,		
		"text": "Tahta",		
		"value": "1"		
	},	
	{
		"id": 1,		
		"hypothesisControlId": 1,		
		"text": "Demir",		
		"value": "3"		
	},	
	{
		"id": 2,		
		"hypothesisControlId": 1,		
		"text": "Plastik",		
		"value": "5"		
	}	
]

Sbt.plugins.SkipIntroDataJSON = 
{
	"SkipIntro": [
		{
			"type": Sbt.plugins.SkipIntro.Type.INTRO,			
			"fileName": "dino vs finn",			
			"filePath": "resources/video/",			
			"width": 762,			
			"height": 463			
		}		
	]
}
