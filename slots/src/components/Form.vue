<template>
    <!-- <form>
        default content will be displayed if there is no form to render
        <slot>No form to render</slot>
    </form> -->
    <form>
        <div class="help">
            <slot name="help"></slot>
        </div>
        <div class="fields">
            <slot name="fields"></slot>
        </div>
        <div class="buttons">
            <slot name="buttons"></slot>
        </div>
        <!-- default slot -->
        <slot></slot>
    </form>
</template>
