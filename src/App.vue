<template>
    <div id="app">
      <div class="Nav">
        <router-view name="Nav"></router-view>
      </div>

        <div class="box" width="100%">
          <div class="BodyLeft" width="20%">
            <router-view name="BodyLeft"></router-view>
          </div>
          <div class="BodyRight" width="80%">
            <router-view name="BodyRight"></router-view>
          </div>
          <div class="clearfix"></div>
        </div>
        <div class="foorm">
          <router-view name="Bottom"></router-view>
        </div>

    </div>
</template>
<style>

</style>
