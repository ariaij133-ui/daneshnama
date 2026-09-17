// ===== تبلیغات خودکار دانش‌نما =====

(function () {

    // فقط صفحات مقاله
    const articleBody = document.querySelector('.article-page');
    if (!articleBody) return;

    // ===== ساخت جایگاه تبلیغ =====
    function createAd(positionId) {
        const ad = document.createElement('div');

        ad.className = 'yektanet-ad-wrapper';

        ad.style.margin = '30px 0';
        ad.style.padding = '15px';
        ad.style.background = 'rgba(0, 255, 136, 0.05)';
        ad.style.border = '1px dashed rgba(0, 255, 136, 0.3)';
        ad.style.borderRadius = '12px';
        ad.style.textAlign = 'center';
        ad.style.minHeight = '300px';

        const slot = document.createElement('div');
        slot.className = 'yn-bnr';
        slot.id = 'ynpos-' + positionId;

        ad.appendChild(slot);

        return ad;
    }


    // ===== تبلیغ وسط مقاله =====
    const paragraphs = articleBody.querySelectorAll('p');

    if (paragraphs.length > 5) {

        const midParagraph =
            paragraphs[Math.floor(paragraphs.length / 2)];

        const midAd = createAd('20500');

        midParagraph.parentNode.insertBefore(
            midAd,
            midParagraph.nextSibling
        );
    }


    // ===== تبلیغ آخر مقاله =====
    const relatedSection =
        articleBody.querySelector('.related-box') ||
        articleBody.querySelector('h2:last-of-type');

    if (relatedSection) {

        const endAd = createAd('20501');

        relatedSection.parentNode.insertBefore(
            endAd,
            relatedSection
        );
    }


    // ===== لود اسکریپت یکتانت =====

    if (!window.yektanet) {

        window.yektanetAnalyticsObject = 'yektanet';

        window.yektanet = window.yektanet || function () {
            window.yektanet.q = window.yektanet.q || [];
            window.yektanet.q.push(arguments);
        };

        window.yektanet.q = window.yektanet.q || [];

        const d = document;
        const head = d.getElementsByTagName('head')[0];

        const date = new Date();

        const src =
            'https://cdn.yektanet.com/superscript-v2/XcgZyRjV/native-48385/yn_pub.js?v=' +
            date.getFullYear().toString() +
            '0' +
            date.getMonth() +
            '0' +
            date.getDate() +
            '0' +
            date.getHours();

        const script = d.createElement('script');

        script.async = true;
        script.src = src;

        head.appendChild(script);
    }

})();
