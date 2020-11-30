import { Map, Point, Polyline, Polygon, GraphicLayer, SimpleLineSymbol, Graphic, SimplePointSymbol, SimpleMarkerSymbol } from '../../customgisapi'

window.load = () => {
  new Vue({
    el: '#app',
    data () {
      return {
        center: {
          x: 0, y: 0
        },
        extent: {
          xmin: 0, ymin: 0, xmax: 0, ymax: 0
        },
        matrix: {
          a: 0, d: 0, e: 0, f: 0
        },
        mouse: {
          lon: 0, lat: 0, x: 0, y: 0
        }
      }
    },
    mounted () {
      const amap = new AMap.Map('amap', {
        fadeOnZoom: false,
        navigationMode: 'classic',
        optimizePanAnimation: false,
        animateEnable: false,
        dragEnable: false,
        zoomEnable: false,
        resizeEnable: true,
        doubleClickZoom: false,
        keyboardEnable: false,
        scrollWheel: false,
        expandZoomRange: true,
        zooms: [1, 20],
        mapStyle: 'normal',
        features: ['road', 'point', 'bg'],
        viewMode: '2D',
      })

      const map = new Map('foo')
      map.on('extent-change', event => {
        this.center.x = event.center[0]
        this.center.y = event.center[1]
        this.extent.xmin = event.extent.xmin
        this.extent.ymin = event.extent.ymin
        this.extent.xmax = event.extent.xmax
        this.extent.ymax = event.extent.ymax
        this.matrix.a = event.matrix.a
        this.matrix.d = event.matrix.d
        this.matrix.e = event.matrix.e
        this.matrix.f = event.matrix.f
        amap.setZoomAndCenter(event.zoom, event.center)
      })
      
      //#region 绘制经线 纬线 北京点
      // draw lon line
      const lonLayer = new GraphicLayer()
      const lonSymbol = new SimpleLineSymbol()
      lonSymbol.strokeStyle = '#0000ff'
      for (let i = -180; i <= 180; i += 10) {
        const line = new Polyline([[i, -80], [i, 80]])
        const graphic = new Graphic(line, lonSymbol)
        lonLayer.add(graphic)
      }
      map.addLayer(lonLayer)
      
      // draw lat line
      const latLayer = new GraphicLayer()
      const latSymbol = new SimpleLineSymbol()
      latSymbol.strokeStyle = '#4d9221'
      for (let i = -80; i <= 80; i += 10) {
        const line = new Polyline([[-180, i], [180, i]])
        const graphic = new Graphic(line, latSymbol)
        latLayer.add(graphic)
      }
      map.addLayer(latLayer)

      // draw lonlat point
      const pointLayer = new GraphicLayer()
      const pointSymbol = new SimplePointSymbol()
      pointSymbol.radius = 5
      pointSymbol.fillStyle = '#de77ae'
      pointSymbol.strokStyle = '#c51b7d'
      for (let i = -180; i <= 180; i += 10) {
        for (let j = -80; j <= 80; j += 10) {
          const point = new Point(i, j)
          const graphic = new Graphic(point, pointSymbol)
          pointLayer.add(graphic)
        }
      }
      map.addLayer(pointLayer)

      // draw Beijing point
      const marker = new SimpleMarkerSymbol()
      marker.width = 32
      marker.height = 32
      marker.offsetX = 16
      marker.offsetY = 32
      marker.url = 'assets/locate.red.png'
      const point = new Point(116.397411, 39.909186)
      // const graphic2 = new Graphic(point, marker)
      const graphic = new Graphic(point)
      map.addGraphic(graphic)
      // map.addGraphic(graphic2)
      //#endregion 

      map.on('mouse-move', event => {
        this.mouse.lon = event.lonlat[0]
        this.mouse.lat = event.lonlat[1]
        this.mouse.x = event.xy[0]
        this.mouse.y = event.xy[1]
      })

      map.setView([0.1, 0.1], 5)

      let lonlats = [[]]
      map.on('click', event => {
        lonlats[0].push(event.lonlat)
      })
      map.on('dbclick', event => {
        lonlats[0].slice(0, lonlats[0].length - 1)
        const polygon = new Polygon(lonlats)
        const graphic = new Graphic(polygon)
        map.addGraphic(graphic)
        lonlats = [[]]
      })

    }
  })
}