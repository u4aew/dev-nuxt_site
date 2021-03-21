<template>
    <div class="footer block">
        <div class="footer__wrapper block-wrapper">
            <div class="footer__minor">
                <div class="footer__minor-wrapper">
                    <div class="footer__minor-main">
                        <div class="footer__copyright">
                            © 2021. Все права защищены.
                        </div>
                    </div>
                    <div class="footer__minor-side">
                        <div class="footer__limitations"
                             title="Информация, представленная на сайте, предназначена для лиц старше 18 лет">
                            +18
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Vbutton from "~/components/ui/button/VButton"

    export default {
        name: 'Footer',
        components: {
            Vbutton
        }
    }
</script>



