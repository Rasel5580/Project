document.getElementById('btn-show-cash-out').addEventListener('click', function(){
    console.log('btn-show-cash-out');
    document.getElementById('cash-out-form').classList.remove('hidden');

    document.getElementById('add-money-form').classList.add('hidden');
})