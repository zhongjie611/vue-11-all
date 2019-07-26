<template>
  <div>
    <link rel="stylesheet" href="//g.alicdn.com/msui/sm/0.6.2/css/sm.min.css">
    <link rel="stylesheet" href="http://m.sui.taobao.org/assets/css/demos.css">
<div class="content native-scroll">
    <div class="list-block">
      <ul>
        <!-- Text inputs -->
        <li>
          <div class="item-content">
            <div class="item-media"><i class="icon icon-form-name"></i></div>
            <div class="item-inner">
              <div class="item-title label">姓名</div>
              <div class="item-input">
                <input type="text" placeholder="请输入你的名字">
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="item-content">
            <div class="item-media"><i class="icon icon-form-email"></i></div>
            <div class="item-inner">
              <div class="item-title label">邮箱</div>
              <div class="item-input">
                <input type="email" placeholder="请输入你的邮箱地址">
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="item-content">
            <div class="item-media"><i class="icon icon-form-password"></i></div>
            <div class="item-inner">
              <div class="item-title label">密码</div>
              <div class="item-input">
                <input type="password" placeholder="请输入你的密码" class="">
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="item-content">
            <div class="item-media"><i class="icon icon-form-gender"></i></div>
            <div class="item-inner">
              <div class="item-title label">性别</div>
              <div class="item-input">
                <select>
                  <option>男</option>
                  <option>女</option>
                </select>
              </div>
            </div>
          </div>
        </li>
        <!-- Date -->
        <li>
          <div class="item-content">
            <div class="item-media"><i class="icon icon-form-calendar"></i></div>
            <div class="item-inner">
              <div class="item-title label">出生日期</div>
              <div class="item-input">
                <input type="date" placeholder="Birth day" value="2014-04-30">
              </div>
            </div>
          </div>
        </li>
        <!-- Switch (Checkbox) -->
        <li>
          <div class="item-content">
            <div class="item-media"><i class="icon icon-form-toggle"></i></div>
            <div class="item-inner">
              <div class="item-title label">是否接受</div>
              <div class="item-input">
                <label class="label-switch">
                  <input type="checkbox">
                  <div class="checkbox"></div>
                </label>
              </div>
            </div>
          </div>
        </li>
        <li class="align-top">
          <div class="item-content">
            <div class="item-media"><i class="icon icon-form-comment"></i></div>
            <div class="item-inner">
              <div class="item-title label">自我评价</div>
              <div class="item-input">
                <textarea></textarea>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="content-block">
      <div class="row">
        <div class="col-50"><a href="#" class="button button-big button-fill button-danger">取消</a></div>
        <div class="col-50"><a href="#" class="button button-big button-fill button-success">提交</a></div>
      </div>
    </div>
  </div>
  </div>
</template>
<script>

export default {};
</script>
<style lang="scss" scoped >

</style>
