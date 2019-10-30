<template>
    <div class="app-body">
        <div class="app-body__wrapper">
            <div class="app-body__header">
                <Header/>
            </div>
            <div class="app-body__main">
                <nuxt/>
            </div>
            <div class="app-body__footer">
                <Footer/>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from '~/components/header/Header'
    import Footer from '~/components/footer/Footer'

    export default {
        components: {
            Header,
            Footer
        }
    }
</script>
