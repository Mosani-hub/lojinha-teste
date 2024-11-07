<script>
    let cartCount = 0;

    function addToCart(product) {
        cartCount++;
        document.getElementById('cart-count').textContent = cartCount;
        alert(product + ' adicionado ao carrinho!');
    }
</script>