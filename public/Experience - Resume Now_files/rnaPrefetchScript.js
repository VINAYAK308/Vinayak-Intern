var hostParts = window.location.host.split('.');
var env = 'local';
var blobFolder = 'qa/';
var contentPath = 'https://@@env.' + hostParts[1] + '.com/payment/contents/';
var baseUrl = 'https://@@env.' + hostParts[1] + '.com/payment';
var vendorBundleSrc = 'https://@@env.' + hostParts[1] + '.com/payment/build/vendor.bundle-1.0.0.561.js';
var developerBundleSrc = 'https://@@env.' + hostParts[1] + '.com/payment/build/app.bundle-1.0.0.561.js';
var plansBundleSrc = 'https://@@env.' + hostParts[1] + '.com/payment/build/plans-1.0.0.561.bundle.js';
var appJsSrc = 'https://@@env.' + hostParts[1] + '.com/payment/scripts/app-1.0.0.561.js';
var ecomWidget = 'https://@@env.' + hostParts[1] + '.com/payment/build/widget.bundle-1.0.0.561.js';
var bootstrapSrc = 'styles/bootstrap/bootstrap.min.css';
var fontAwesomeSrc = 'fonts/fontawesome5-subset/css/all.min.css';
var fontAwesomeSolidBrandsWoffSrc = 'styles/font-awesome-5/webfonts/fa-brands-400.woff2';
var jQuerySrc = 'https://@@env.' + hostParts[1] + '.com/blob/common/scripts/jquery-3.5.1.min.js';
var googleFontsSrc = 'https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500,600,700|Source+Sans+Pro:200,300,400,600,700|Open+Sans:300,400,600,700,800|Roboto+Slab:100,300,400,700|Work+Sans:300,400,500,600,700|Merriweather:300,400,600,700';
var mainCssSrc = 'https://@@env.' + hostParts[1] + '.com/payment/stylesheets/rna/main-1.0.0.561.css';
var imageOptimizationBaseUrl = 'https://@@env.' + hostParts[1] + '.com';
var resFileName = 'dev-1.0.0.561.json';
var esShimSrc = 'scripts/es6/es6-shim.min.js';
switch (hostParts[0]) {
case 'reg':
case 'reg-app':
case 'pen':
    env = hostParts[0] + '-assets';
    blobFolder = 'reg/';
    resFileName = 'reg-1.0.0.561.json';
    break;
case 'stg':
case 'stg-app':
    env = 'stg-assets';
    blobFolder = 'stg/';
    resFileName = 'stg-1.0.0.561.json';
    break;
case 'qa':
case 'qa-app':
    env = hostParts[0] + '-assets';
    blobFolder = 'qa/';
    break;
case 'perf':
case 'perf-app':
    env = hostParts[0] + '-assets';
    blobFolder = 'reg/';
    break;
case 'www':
    env = 'assets';
    blobFolder = 'prod/';
    resFileName = 'prod-1.0.0.561.json';
    break;
}
var localizedTextJsonPath = baseUrl.replace('@@env', env) + '/contents/' + blobFolder + 'resume-now.com/localizedText-1.0.0.561.json';
var ecomJsonPath = baseUrl.replace('@@env', env) + '/contents/' + blobFolder + 'common/localizedText-1.0.0.561.json';
var resfilePath = baseUrl.replace('@@env', env) + '/contents/' + blobFolder + 'resume-now.com/' + resFileName;
var nrJsPath = baseUrl.replace('@@env', env) + '/contents/' + blobFolder + 'resume-now.com/nr.js';
contentPath = contentPath.replace('@@env', env);

function isEmpty(obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

function prefetchFiles(src, callback, attributes) {
    var s, r, t;
    r = false;
    s = document.createElement('link');
    s.rel = 'prefetch';
    s.href = src;
    if (attributes && isEmpty(attributes)) {
        for (var key in attributes) {
            var attr = document.createAttribute(key);
            if (attributes[key]) {
                attr.value = attributes[key];
            }
            s.setAttributeNode(attr);
        }
    }
    s.onload = s.onreadystatechange = function () {
        if (!r && (!this.readyState || this.readyState == 'complete' || this.readyState == 'loaded')) {
            r = true;
            callback && callback();
        }
    };
    t = document.getElementsByTagName('link')[0];
    t.parentNode.insertBefore(s, t);
}

function loadImageFiles() {
    loadOptimizedImages();
}

function loadOptimizedImages(){
    var optimizedImageList = [];
    optimizedImageList.push('/blobimages/ecom/rna/synergy-images/images/yellow-gradient.png');
    optimizedImageList.push('/blobimages/ecom/rna/exit-intent-modal-images/images/demo-resume.png');
    optimizedImageList.push('/blobimages/ecom/rna/exit-intent-modal-images/images/flex-job-modal-image.png');
    optimizedImageList.push('/blobimages/ecom/rna/exit-intent-modal-images/images/static-steps-img.png');
    optimizedImageList.push('/blobimages/ecom/rna/exit-intent-modal-images/images/free-tag.png');
    optimizedImageList.push('/blobimages/ecom/rna/images/fomo.png');
    optimizedImageList.push('/blobimages/ecom/rna/images/comment-icon.png');
    optimizedImageList.push('/blobimages/ecom/rna/images/NewAppStore.png');
    optimizedImageList.push('/blobimages/ecom/rna/images/logo.png');
    optimizedImageList.push('/blobimages/ecom/rna/images/contact-icon.png');
    optimizedImageList.push('/blobimages/ecom/rna/images/office.png');
    optimizedImageList.push('/blobimages/ecom/rna/images/NewGoogleStore.png');
    optimizedImageList.push('/blobimages/ecom/wlb/images/loading.gif');
    optimizedImageList.push('/blobimages/ecom/rna/images/icon-app-store.png');
    optimizedImageList.push('/blobimages/ecom/rna/images/hubert_baker.png');
    optimizedImageList.push('/blobimages/ecom/rna/images/Heather_spielmaker.png');
    optimizedImageList.push('/blobimages/ecom/rna/images/asSeenInSellPage.png');
    optimizedImageList.push('/blobimages/ecom/rna/images/footer_logo.png');
    optimizedImageList.push('/blobimages/ecom/rna/images/footer-social-icons.png');
    optimizedImageList.push('/blobimages/ecom/rna/images/jobsnow.png');
    optimizedImageList.push('/blobimages/ecom/rna/images/secondary-logo.png');
    optimizedImageList.push('/blobimages/ecom/rna/rn-rebranding/images/seen-in-logos.png');
    optimizedImageList.push('/blobimages/ecom/rna/rn-rebranding/images/jobs-mob.png');
    optimizedImageList.push('/blobimages/ecom/rna/rn-rebranding/images/rebrand-logo.png');
    optimizedImageList.push('/blobimages/ecom/rna/rn-rebranding/images/app-store.png');
    optimizedImageList.push('/blobimages/ecom/rna/rn-rebranding/images/google-play-badge.png');
    optimizedImageList.push('/blobimages/ecom/rna/rn-rebranding/images/HRTech.png');
    optimizedImageList.push('/blobimages/ecom/rna/rn-rebranding/images/IAEWS.png');
    optimizedImageList.push('/blobimages/ecom/rna/rn-rebranding/images/fomo1.svg');
    optimizedImageList.push('/blobimages/ecom/rna/rn-rebranding/images/fomo2.svg');
    optimizedImageList.push('/blobimages/ecom/rna/rn-rebranding/images/fomo3.svg');
    optimizedImageList.push('/blobimages/ecom/rna/rn-rebranding/images/fomo4.svg');
    optimizedImageList.push('/blobimages/ecom/rna/rn-rebranding/images/fomo5.svg');
    optimizedImageList.push('/blobimages/ecom/rna/images/video_img.svg');
    optimizedImageList.push('/blobimages/ecom/rna/sem/images/resume.png');
    optimizedImageList.push('/blobimages/ecom/rna/subscription-detail/images/calendar.png');
    optimizedImageList.push('/blobimages/ecom/rna/survey-onboarding/images/online_profile.png');
    optimizedImageList.push('/blobimages/ecom/rna/survey-onboarding/images/resume.png');
    optimizedImageList.push('/blobimages/ecom/rna/survey-onboarding/images/job-offer-img.png');
    optimizedImageList.push('/blobimages/ecom/rna/survey-onboarding/images/resumebutton-resume.png');
    optimizedImageList.push('/blobimages/ecom/rna/survey-onboarding/images/coverletter.png');
    optimizedImageList.forEach(function (image) {
        prefetchFiles(imageOptimizationBaseUrl.replace('@@env', env) + image);
    });
} 

prefetchFiles(vendorBundleSrc.replace('@@env', env));		//prefetch vendor bundle
prefetchFiles(developerBundleSrc.replace('@@env', env));	//prefetch developer bundle
prefetchFiles(plansBundleSrc.replace('@@env', env));	//prefetch plans bundle
prefetchFiles(appJsSrc.replace('@@env', env));	//prefetch app JS
prefetchFiles(ecomWidget.replace('@@env', env));
prefetchFiles(contentPath + bootstrapSrc);						//prefetch bootstrap CSS
prefetchFiles(contentPath + fontAwesomeSrc);						//prefetch fontawesome CSS
// prefetchFiles(contentPath + fontAwesomeSolidBrandsWoffSrc);
prefetchFiles(jQuerySrc.replace('@@env', env));						//prefetch jQuery
prefetchFiles(contentPath + esShimSrc);
prefetchFiles(googleFontsSrc);					//prefetch googleFonts CSS
prefetchFiles(mainCssSrc.replace('@@env', env));			//prefetch main CSS 
// prefetchFiles(ecomJsonPath);            //prefetch ecom JSON
// prefetchFiles(localizedTextJsonPath);
prefetchFiles(resfilePath);
prefetchFiles(nrJsPath);
prefetchFiles('https://www.google.com/recaptcha/api.js?render=explicit');
loadImageFiles();										//prefect image files
