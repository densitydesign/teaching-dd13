/*Chapter 3 alluvial equality*/
$('#pos').click(function() {
	$('.negative').addClass("opacita");
	$('.neutral').addClass("opacita");
	$('.positive').removeClass("opacita");
});

$('#all').click(function() {
	$('.negative').removeClass("opacita");
	$('.neutral').removeClass("opacita");
	$('.positive').removeClass("opacita");
});

$('#neg').click(function() {
	$('.negative').removeClass("opacita");
	$('.neutral').addClass("opacita");
	$('.positive').addClass("opacita");
});

$('#neu').click(function() {
	$('.negative').addClass("opacita");
	$('.neutral').removeClass("opacita");
	$('.positive').addClass("opacita");
});

/*Chapter 3 alluvial inequality*/
$('#pos1').click(function() {
	$('.negative1').addClass("opacita");
	$('.neutral1').addClass("opacita");
	$('.positive1').removeClass("opacita");
	$('.positiveneu1').addClass("opacita");
});

$('#all1').click(function() {
	$('.negative1').removeClass("opacita");
	$('.neutral1').removeClass("opacita");
	$('.positive1').removeClass("opacita");
	$('.positiveneu1').removeClass("opacita");
});

$('#neg1').click(function() {
	$('.negative1').removeClass("opacita");
	$('.neutral1').addClass("opacita");
	$('.positive1').addClass("opacita");
	$('.positiveneu1').addClass("opacita");
});

$('#neu1').click(function() {
	$('.negative1').addClass("opacita");
	$('.neutral1').removeClass("opacita");
	$('.positive1').addClass("opacita");
	$('.positiveneu1').addClass("opacita");
});

$('#posneu1').click(function() {
	$('.negative1').addClass("opacita");
	$('.neutral1').addClass("opacita");
	$('.positive1').addClass("opacita");
	$('.positiveneu1').removeClass("opacita");
});

/*Chapter 3 alluvial equality per categorie*/
$('#Audio_Video_Clips1').mouseenter(function() {
	$('.ciao:not("#Audio_Video_Clips1")').addClass("opacita");
});

$('#Audio_Video_Clips1').mouseleave(function() {
	$('.ciao:not("#Audio_Video_Clips1")').removeClass("opacita");
});

$('#Health-Government_Legal1').mouseenter(function() {
	$('.ciao:not("#Health-Government_Legal1")').addClass("opacita");
});

$('#Health-Government_Legal1').mouseleave(function() {
	$('.ciao:not("#Health-Government_Legal1")').removeClass("opacita");
});

$('#Financial_services-news_media1').mouseenter(function() {
	$('.ciao:not("#Financial_services-news_media1")').addClass("opacita");
});

$('#Financial_services-news_media1').mouseleave(function() {
	$('.ciao:not("#Financial_services-news_media1")').removeClass("opacita");
});

$('#Financial_services-charitable_organizations1').mouseenter(function() {
	$('.ciao:not("#Financial_services-charitable_organizations1")').addClass("opacita");
});

$('#Financial_services-charitable_organizations1').mouseleave(function() {
	$('.ciao:not("#Financial_services-charitable_organizations1")').removeClass("opacita");
});

$('#Informational1').mouseenter(function() {
	$('.ciao:not("#Informational1")').addClass("opacita");
});

$('#Informational1').mouseleave(function() {
	$('.ciao:not("#Informational1")').removeClass("opacita");
});

$('#Business_Economy-News_Media1').mouseenter(function() {
	$('.ciao:not("#Business_Economy-News_Media1")').addClass("opacita");
});

$('#Business_Economy-News_Media1').mouseleave(function() {
	$('.ciao:not("#Business_Economy-News_Media1")').removeClass("opacita");
});

$('#Reference1').mouseenter(function() {
	$('.ciao:not("#Reference1")').addClass("opacita");
});

$('#Reference1').mouseleave(function() {
	$('.ciao:not("#Reference1")').removeClass("opacita");
});

$('#Financial_services1').mouseenter(function() {
	$('.ciao:not("#Financial_services1")').addClass("opacita");
});

$('#Financial_services1').mouseleave(function() {
	$('.ciao:not("#Financial_services1")').removeClass("opacita");
});

$('#Business_Economy-Reference1').mouseenter(function() {
	$('.ciao:not("#Business_Economy-Reference1")').addClass("opacita");
});

$('#Business_Economy-Reference1').mouseleave(function() {
	$('.ciao:not("#Business_Economy-Reference1")').removeClass("opacita");
});


$('#Sports_Recreation1').mouseenter(function() {
	$('.ciao:not("#Sports_Recreation1")').addClass("opacita");
});

$('#Sports_Recreation1').mouseleave(function() {
	$('.ciao:not("#Sports_Recreation1")').removeClass("opacita");
});


$('#Financial_services-government_legal1').mouseenter(function() {
	$('.ciao:not("#Financial_services-government_legal1")').addClass("opacita");
});

$('#Financial_services-government_legal1').mouseleave(function() {
	$('.ciao:not("#Financial_services-government_legal1")').removeClass("opacita");
});

$('#Business_Economy1').mouseenter(function() {
	$('.ciao:not("#Business_Economy1")').addClass("opacita");
});

$('#Business_Economy1').mouseleave(function() {
	$('.ciao:not("#Business_Economy1")').removeClass("opacita");
});

$('#Health1').mouseenter(function() {
	$('.ciao:not("#Health1")').addClass("opacita");
});

$('#Health1').mouseleave(function() {
	$('.ciao:not("#Health1")').removeClass("opacita");
});

$('#Reference-Education1').mouseenter(function() {
	$('.ciao:not("#Reference-Education1")').addClass("opacita");
});

$('#Reference-Education1').mouseleave(function() {
	$('.ciao:not("#Reference-Education1")').removeClass("opacita");
});

$('#Reference-Government_Legal1').mouseenter(function() {
	$('.ciao:not("#Reference-Government_Legal1")').addClass("opacita");
});

$('#Reference-Government_Legal1').mouseleave(function() {
	$('.ciao:not("#Reference-Government_Legal1")').removeClass("opacita");
});

$('#News_Media1').mouseenter(function() {
	$('.ciao:not("#News_Media1")').addClass("opacita");
});

$('#News_Media1').mouseleave(function() {
	$('.ciao:not("#News_Media1")').removeClass("opacita");
});

$('#Education1').mouseenter(function() {
	$('.ciao:not("#Education1")').addClass("opacita");
});

$('#Education1').mouseleave(function() {
	$('.ciao:not("#Education1")').removeClass("opacita");
});

$('#Government_Legal1').mouseenter(function() {
	$('.ciao:not("#Government_Legal1")').addClass("opacita");
});

$('#Government_Legal1').mouseleave(function() {
	$('.ciao:not("#Government_Legal1")').removeClass("opacita");
});

$('#Newsgroups_Forums-Reference1').mouseenter(function() {
	$('.ciao:not("#Newsgroups_Forums-Reference1")').addClass("opacita");
});

$('#Newsgroups_Forums-Reference1').mouseleave(function() {
	$('.ciao:not("#Newsgroups_Forums-Reference1")').removeClass("opacita");
});

$('#Technology_Internet1').mouseenter(function() {
	$('.ciao:not("#Technology_Internet1")').addClass("opacita");
});

$('#Technology_Internet1').mouseleave(function() {
	$('.ciao:not("#Technology_Internet1")').removeClass("opacita");
});

$('#Entertainment1').mouseenter(function() {
	$('.ciao:not("#Entertainment1")').addClass("opacita");
});

$('#Entertainment1').mouseleave(function() {
	$('.ciao:not("#Entertainment1")').removeClass("opacita");
});

$('#Charitableorganization1').mouseenter(function() {
	$('.ciao:not("#Charitableorganization1")').addClass("opacita");
});

$('#Charitableorganization1').mouseleave(function() {
	$('.ciao:not("#Charitableorganization1")').removeClass("opacita");
});

$('#Political_Socialadvocacy1').mouseenter(function() {
	$('.ciao:not("#Political_Socialadvocacy1")').addClass("opacita");
});

$('#Political_Socialadvocacy1').mouseleave(function() {
	$('.ciao:not("#Political_Socialadvocacy1")').removeClass("opacita");
});

$('#Government_Legal-Business_Economy1').mouseenter(function() {
	$('.ciao:not("#Government_Legal-Business_Economy1")').addClass("opacita");
});

$('#Government_Legal-Business_Economy1').mouseleave(function() {
	$('.ciao:not("#Government_Legal-Business_Economy1")').removeClass("opacita");
});

$('#Socialnetwork1').mouseenter(function() {
	$('.ciao:not("#Socialnetwork1")').addClass("opacita");
});

$('#Socialnetwork1').mouseleave(function() {
	$('.ciao:not("#Socialnetwork1")').removeClass("opacita");
});

/*Chapter 3 alluvial inequality per categorie*/
$('#Financial_Services_-_Charitable_Organization').mouseenter(function() {
	$('.ciao1:not("#Financial_Services_-_Charitable_Organization")').addClass("opacita");
});

$('#Financial_Services_-_Charitable_Organization').mouseleave(function() {
	$('.ciao1:not("#Financial_Services_-_Charitable_Organization")').removeClass("opacita");
});


$('#Financial_Services_-_News_Media').mouseenter(function() {
	$('.ciao1:not("#Financial_Services_-_News_Media")').addClass("opacita");
});

$('#Financial_Services_-_News_Media').mouseleave(function() {
	$('.ciao1:not("#Financial_Services_-_News_Media")').removeClass("opacita");
});

$('#Health').mouseenter(function() {
	$('.ciao1:not("#Health")').addClass("opacita");
});

$('#Health').mouseleave(function() {
	$('.ciao1:not("#Health")').removeClass("opacita");
});

$('#Business_Economy_-_Reference').mouseenter(function() {
	$('.ciao1:not("#Business_Economy_-_Reference")').addClass("opacita");
});

$('#Business_Economy_-_Reference').mouseleave(function() {
	$('.ciao1:not("#Business_Economy_-_Reference")').removeClass("opacita");
});

$('#Financial_Services_-_Government_Legal').mouseenter(function() {
	$('.ciao1:not("#Financial_Services_-_Government_Legal")').addClass("opacita");
});

$('#Financial_Services_-_Government_Legal').mouseleave(function() {
	$('.ciao1:not("#Financial_Services_-_Government_Legal")').removeClass("opacita");
});

$('#Charitable_Organization').mouseenter(function() {
	$('.ciao1:not("#Charitable_Organization")').addClass("opacita");
});

$('#Charitable_Organization').mouseleave(function() {
	$('.ciao1:not("#Charitable_Organization")').removeClass("opacita");
});

$('#Reference_-_Education').mouseenter(function() {
	$('.ciao1:not("#Reference_-_Education")').addClass("opacita");
});

$('#Reference_-_Education').mouseleave(function() {
	$('.ciao1:not("#Reference_-_Education")').removeClass("opacita");
});

$('#Reference').mouseenter(function() {
	$('.ciao1:not("#Reference")').addClass("opacita");
});

$('#Reference').mouseleave(function() {
	$('.ciao1:not("#Reference")').removeClass("opacita");
});

$('#Government_Legal').mouseenter(function() {
	$('.ciao1:not("#Government_Legal")').addClass("opacita");
});

$('#Government_Legal').mouseleave(function() {
	$('.ciao1:not("#Government_Legal")').removeClass("opacita");
});


$('#News_Media').mouseenter(function() {
	$('.ciao1:not("#News_Media")').addClass("opacita");
});

$('#News_Media').mouseleave(function() {
	$('.ciao1:not("#News_Media")').removeClass("opacita");
});


$('#Business_Economy').mouseenter(function() {
	$('.ciao1:not("#Business_Economy")').addClass("opacita");
});

$('#Business_Economy').mouseleave(function() {
	$('.ciao1:not("#Business_Economy")').removeClass("opacita");
});

$('#Education').mouseenter(function() {
	$('.ciao1:not("#Education")').addClass("opacita");
});

$('#Education').mouseleave(function() {
	$('.ciao1:not("#Education")').removeClass("opacita");
});

$('#Political_Social_Advocacy').mouseenter(function() {
	$('.ciao1:not("#Political_Social_Advocacy")').addClass("opacita");
});

$('#Political_Social_Advocacy').mouseleave(function() {
	$('.ciao1:not("#Political_Social_Advocacy")').removeClass("opacita");
});

$('#Entertainment_-_News_Media').mouseenter(function() {
	$('.ciao1:not("#Entertainment_-_News_Media")').addClass("opacita");
});

$('#Entertainment_-_News_Media').mouseleave(function() {
	$('.ciao1:not("#Entertainment_-_News_Media")').removeClass("opacita");
});

$('#Technology_Internet').mouseenter(function() {
	$('.ciao1:not("#Technology_Internet")').addClass("opacita");
});

$('#Technology_Internet').mouseleave(function() {
	$('.ciao1:not("#Technology_Internet")').removeClass("opacita");
});

$('#Entertainment_-_Humor_Jokes').mouseenter(function() {
	$('.ciao1:not("#Entertainment_-_Humor_Jokes")').addClass("opacita");
});

$('#Entertainment_-_Humor_Jokes').mouseleave(function() {
	$('.ciao1:not("#Entertainment_-_Humor_Jokes")').removeClass("opacita");
});

$('#Entertainment_-_Reference').mouseenter(function() {
	$('.ciao1:not("#Entertainment_-_Reference")').addClass("opacita");
});

$('#Entertainment_-_Reference').mouseleave(function() {
	$('.ciao1:not("#Entertainment_-_Reference")').removeClass("opacita");
});

$('#Health_-_Governement_Legal').mouseenter(function() {
	$('.ciao1:not("#Health_-_Governement_Legal")').addClass("opacita");
});

$('#Health_-_Governement_Legal').mouseleave(function() {
	$('.ciao1:not("#Health_-_Governement_Legal")').removeClass("opacita");
});

$('#Personal_Sites').mouseenter(function() {
	$('.ciao1:not("#Personal_Sites")').addClass("opacita");
});

$('#Personal_Sites').mouseleave(function() {
	$('.ciao1:not("#Personal_Sites")').removeClass("opacita");
});

/*Chapter 3 sentiment per categoria*/
$('#News_and_mediaa').mouseenter(function() {
	$('.ciao11:not("#News_and_mediaa")').addClass("opacita");
});

$('#News_and_mediaa').mouseleave(function() {
	$('.ciao11:not("#News_and_mediaa")').removeClass("opacita");
});

$('#Government_Legall').mouseenter(function() {
	$('.ciao11:not("#Government_Legall")').addClass("opacita");
});

$('#Government_Legall').mouseleave(function() {
	$('.ciao11:not("#Government_Legall")').removeClass("opacita");
});

$('#Educationn').mouseenter(function() {
	$('.ciao11:not("#Educationn")').addClass("opacita");
});

$('#Educationn').mouseleave(function() {
	$('.ciao11:not("#Educationn")').removeClass("opacita");
});

$('#Political_Social_Advocacyy').mouseenter(function() {
	$('.ciao11:not("#Political_Social_Advocacyy")').addClass("opacita");
});

$('#Political_Social_Advocacyy').mouseleave(function() {
	$('.ciao11:not("#Political_Social_Advocacyy")').removeClass("opacita");
});

$('#Business_Economyy').mouseenter(function() {
	$('.ciao11:not("#Business_Economyy")').addClass("opacita");
});

$('#Business_Economyy').mouseleave(function() {
	$('.ciao11:not("#Business_Economyy")').removeClass("opacita");
});

$('#Referencee').mouseenter(function() {
	$('.ciao11:not("#Referencee")').addClass("opacita");
});

$('#Referencee').mouseleave(function() {
	$('.ciao11:not("#Referencee")').removeClass("opacita");
});

$('#Financial_servicess').mouseenter(function() {
	$('.ciao11:not("#Financial_servicess")').addClass("opacita");
});

$('#Financial_servicess').mouseleave(function() {
	$('.ciao11:not("#Financial_servicess")').removeClass("opacita");
});

$('#Entertainmentt').mouseenter(function() {
	$('.ciao11:not("#Entertainmentt")').addClass("opacita");
});

$('#Entertainmentt').mouseleave(function() {
	$('.ciao11:not("#Entertainmentt")').removeClass("opacita");
});

$('#Technology_Internett').mouseenter(function() {
	$('.ciao11:not("#Technology_Internett")').addClass("opacita");
});

$('#Technology_Internett').mouseleave(function() {
	$('.ciao11:not("#Technology_Internett")').removeClass("opacita");
});

$('#Charitable_Orgg').mouseenter(function() {
	$('.ciao11:not("#Charitable_Orgg")').addClass("opacita");
});

$('#Charitable_Orgg').mouseleave(function() {
	$('.ciao11:not("#Charitable_Orgg")').removeClass("opacita");
});

$('#Audio_Videoo').mouseenter(function() {
	$('.ciao11:not("#Audio_Videoo")').addClass("opacita");
});

$('#Audio_Videoo').mouseleave(function() {
	$('.ciao11:not("#Audio_Videoo")').removeClass("opacita");
});

$('#Personal_Sitess').mouseenter(function() {
	$('.ciao11:not("#Personal_Sitess")').addClass("opacita");
});

$('#Personal_Sitess').mouseleave(function() {
	$('.ciao11:not("#Personal_Sitess")').removeClass("opacita");
});

$('#Sport_Recreationn').mouseenter(function() {
	$('.ciao11:not("#Sport_Recreationn")').addClass("opacita");
});

$('#Sport_Recreationn').mouseleave(function() {
	$('.ciao11:not("#Sport_Recreationn")').removeClass("opacita");
});

$('#Mixed_Contentt').mouseenter(function() {
	$('.ciao11:not("#Mixed_Contentt")').addClass("opacita");
});

$('#Mixed_Contentt').mouseleave(function() {
	$('.ciao11:not("#Mixed_Contentt")').removeClass("opacita");
});

$('#Healthh').mouseenter(function() {
	$('.ciao11:not("#Healthh")').addClass("opacita");
});

$('#Healthh').mouseleave(function() {
	$('.ciao11:not("#Healthh")').removeClass("opacita");
});

$('#Humor_Jokess').mouseenter(function() {
	$('.ciao11:not("#Humor_Jokess")').addClass("opacita");
});

$('#Humor_Jokess').mouseleave(function() {
	$('.ciao11:not("#Humor_Jokess")').removeClass("opacita");
});

$('#Social_Networkingg').mouseenter(function() {
	$('.ciao11:not("#Social_Networkingg")').addClass("opacita");
});

$('#Social_Networkingg').mouseleave(function() {
	$('.ciao11:not("#Social_Networkingg")').removeClass("opacita");
});

$('#Informationall').mouseenter(function() {
	$('.ciao11:not("#Informationall")').addClass("opacita");
});

$('#Informationall').mouseleave(function() {
	$('.ciao11:not("#Informationall")').removeClass("opacita");
});

$('#Newsgroup_Forumm').mouseenter(function() {
	$('.ciao11:not("#Newsgroup_Forumm")').addClass("opacita");
});

$('#Newsgroup_Forumm').mouseleave(function() {
	$('.ciao11:not("#Newsgroup_Forumm")').removeClass("opacita");
});