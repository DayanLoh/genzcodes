function showDetail(rewardType) {
    var modal = document.getElementById('reward-detail');
    var title = document.getElementById('reward-title');
    var description = document.getElementById('reward-description');
    
    if (rewardType === 'dining') {
        title.textContent = 'Free Onesie';
        description.textContent = 'Redeem Onesie, minimum purchase of $50.';
    } else if (rewardType === 'shopping') {
        title.textContent = 'Shopping Discount';
        description.textContent = 'Save 15% on your next purchase.';
    }
    // Add more reward types as needed
    
    modal.style.display = 'block';
}

function closeDetail() {
    var modal = document.getElementById('reward-detail');
    modal.style.display = 'none';
}

function redeemReward() {
    alert('Reward redeemed!');
}

function editProfile() {
    alert('Profile editing not implemented yet.');
}
