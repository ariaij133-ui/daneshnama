// ===== اضافه کردن خودکار تبلیغات به مقالات =====
document.addEventListener('DOMContentLoaded', function() {
    
    // فقط توی صفحات مقاله اجرا بشه (نه صفحه اصلی)
    const articleBody = document.querySelector('.article-page');
    if (!articleBody) return;
    
    // ===== تبلیغ وسط مقاله =====
    const paragraphs = articleBody.querySelectorAll('p');
    if (paragraphs.length > 5) {
        const midParagraph = paragraphs[Math.floor(paragraphs.length / 2)];
        const midAd = document.createElement('div');
        midAd.className = 'yektanet-ad-wrapper';
        midAd.style.margin = '30px 0';
        midAd.style.padding = '15px';
        midAd.style.background = 'rgba(0, 255, 136, 0.05)';
        midAd.style.border = '1px dashed rgba(0, 255, 136, 0.3)';
        midAd.style.borderRadius = '12px';
        midAd.style.textAlign = 'center';
        midAd.style.minHeight = '100px';
        midAd.innerHTML = '<div class="yn-bnr" id="ynpos-20481"></div>';
        midParagraph.parentNode.insertBefore(midAd, midParagraph.nextSibling);
    }
    
    // ===== تبلیغ آخر مقاله =====
    const relatedSection = articleBody.querySelector('.related-box') || 
                          articleBody.querySelector('h2:last-of-type');
    if (relatedSection) {
        const endAd = document.createElement('div');
        endAd.className = 'yektanet-ad-wrapper';
        endAd.style.margin = '30px 0';
        endAd.style.padding = '15px';
        endAd.style.background = 'rgba(0, 255, 136, 0.05)';
        endAd.style.border = '1px dashed rgba(0, 255, 136, 0.3)';
        endAd.style.borderRadius = '12px';
        endAd.style.textAlign = 'center';
        endAd.style.minHeight = '100px';
        endAd.innerHTML = '<div class="yn-bnr" id="ynpos-20482"></div>';
        relatedSection.parentNode.insertBefore(endAd, relatedSection);
    }
});
